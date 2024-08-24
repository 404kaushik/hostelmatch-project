import signupImg from "../../assets/signup.png"
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const TermsAndConditions = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    const handleSuccess = async (response) => {
        //get user info from google
        const info = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            { headers: { Authorization: 'Bearer ' + response.access_token } },
        );

        var userInfo = {}
        userInfo.first_name = info.data.given_name
        userInfo.last_name = info.data.family_name
        userInfo.google_id = info.data.sub
        userInfo.email = info.data.email

        axios.post("/users/signup", { ...userInfo })
            .then(response => {
                toast.success("User registered successfully!")
            })
            .catch(error => {
                toast.error("Error: " + String(error.response.data.message))
                console.error('Error fetching data:', error);
            });


    }
    const handleFailure = (response) => {
        toast.error("Something went wrong. Please try again.")
        console.log(response)

    }
    const loginGoogle = useGoogleLogin({
        onSuccess: response => handleSuccess(response),
        onError: response => handleFailure(response),
    });

    return (
        <div class="flex flex-row gap-8 px-4 py-6 sm:px-8 font-poppins">
            <div class="flex-1 ">
                <div
                    class="text-3xl whitespace-nowrap text-slate-800 sm:text-4xl md:text-3xl pt-10 font-bold font-poppins"
                    style={{ "line-height": "1" }}
                >
                    Terms and Conditions
                </div>
                {/* TERMS n CONDITIONS CONTENT */}
                <div class="pt-5 font-bold font-poppins">
                    1. Introduction
                </div>
                <div class="pt-5 font-poppins">
                    Please read the Terms of Service carefully before you start to use the Website.
                    <br/>                    
                    <div className="mt-5 font-poppins">Thank you for using Hostelmatch platform.</div>
                </div>

                <div class="pt-5 font-bold font-poppins">
                    2. Your Acceptance of this Agreement
                </div>
                <div class="pt-5 font-poppins">
                    All references to "We",”Company”, "Us" or "Our" in these terms refer to (HostelHop Platform<br/>
                    Ltd.("Hostelmatch")), the operator of the Hostelmatch website. When We refer to "you" or “your”, We<br/>
                    mean any person that accesses or uses the Hostelmatch website. Your use of the Hostelmatch website is<br/>
                    subject to these Terms and our private policy, but please note that do not apply to any other use of that<br/>
                    on third-party websites.
                    <br /><br />
                    These terms of service are entered into by and between “You” and “Us.”. The following terms and<br/>
                    conditions, together with any documents they expressly incorporate by reference (collectively "Terms of<br/>
                    Service"), govern your access to and use of www.hostelmatch.com, including any content, functionality,<br/>
                    and services offered on or through www.hostelmatch.com (the "Website").
                    <br /><br />
                    Please read these Terms carefully, as they contain important information concerning your legal rights<br/>
                    and limitations on these rights, as well as information about applicable law and jurisdiction for any<br/>
                    disputes. By accessing or using the Hostelmatch Site, you represent that you have read and understood<br/>
                    these Terms and agree to use the Hostelmatch Site in accordance with and subject to these Terms and<br/>
                    Our Data Protection Notice without modification. By using the Website [or by clicking to accept or agree<br/>
                    to the Terms of Service when this option is made available to you], you accept and agree to be bound<br/>
                    and abide by these Terms of Service and our Privacy Policy, found at /privacy-policy, incorporated herein<br/>
                    by reference. If you do not want to agree to these Terms of Service, you must not access or use the<br/>
                    Website
                    <br /><br />
                    You must be at least 13 years old to use this Website. However, children of all ages may use the Website<br/>
                    if enabled by a parent or legal guardian. If you are under 18, you represent that you have your parent or<br/>
                    guardian's permission to use the Website. Please have them read these Terms of Service with you.
                    <br /><br />
                    If you are a parent or legal guardian of a user under the age of 18, by allowing your child to use the<br/>
                    Website, you are subject to the terms of these Terms of Service and responsible for your child's activity<br/>
                    on the Website.
                    <br /><br />
                    <div className="font-bold font-poppins">
                        BY ACCESSING AND USING THIS WEBSITE, YOU:
                        <br /><br />
                        ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS OF
                        SERVICE;
                        <br /><br />
                        YOU REPRESENT AND WARRANT THAT YOU ARE THE LEGAL AGE OF
                        MAJORITY UNDER APPLICABLE<br/> LAW TO FORM A BINDING CONTRACT WITH
                        US; AND,
                        <br /><br />
                        YOU AGREE IF YOU ACCESS THE WEBSITE FROM A JURISDICTION WHERE IT
                        IS NOT PERMITTED, YOU<br/> DO SO AT YOUR OWN RISK.
                    </div>
                </div>

                <div class="pt-5 font-bold font-poppins">
                    3. Updates to Terms of Service
                </div>
                <div class="pt-5 ">
                    We may revise and update these Terms of Service from time to time in our sole<br/>
                    discretion. All changes are effective immediately when we post them and apply to<br/>
                    all access to and use of the Website thereafter.
                    <br /><br />
                    Continuing to use the Website following the posting of revised Terms of Service<br/>
                    means that you accept and agree to the changes. You are expected to check this<br/>
                    page each time you access this Website, so you are aware of any changes, as they<br/>
                    are binding on you
                </div>

                <div class="pt-5 font-bold">
                    4. Your Responsibilities

                </div>
                <div class="pt-5 ">
                    You are required to ensure that all persons who access the Website are aware of<br/>
                    this Agreement and comply with it. It is a condition of your use of the Website that<br/>
                    all the information you provide on the Website is correct, current, and complete.<br/>
                    <br /><br />
                    <div className="font-sans">
                        YOU ARE SOLELY AND ENTIRELY RESPONSIBLE FOR YOUR USE OF THE WEBSITE AND
                        YOUR COMPUTER,<br/> INTERNET AND DATA SECURITY.
                    </div>
                </div>

                <div class="pt-5 font-bold">
                    5. Prohibited Activities
                </div>
                <div class="pt-5 ">
                    You may use the Website only for lawful purposes and in accordance with these
                    Terms of Service. You<br/> agree not to use the Website:
                    <br />
                    <ul class=' list-outside list-disc ml-6 mt-5 space-y-2'>
                        <li>In any way that violates any applicable federal, state, local or international
                            law or regulation<br/> (including, without limitation, any laws regarding the
                            exports of data software to and from<br/> Canada. or other countries).</li>
                        <li> For the purpose of exploiting, harming, or attempting to exploit or harm
                            minors in any way by<br/> exposing them to inappropriate content, asking for
                            personally identifiable information or<br/> otherwise.</li>
                        <li>To send, knowingly receive, upload, download, use, or re-use any material
                            that does not comply<br/> with the Submission Standards set out in these Terms
                            of Service.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional
                            material, including any<br/> "junk mail," "chain letter," "spam," or any other
                            similar solicitation.
                        </li>
                        <li>To impersonate or attempt to impersonate the “Company”, a Company
                            employee, another user,<br/> or any other persona or entity (including, without
                            limitation, by using email addresses<br/> associated with any of the foregoing).</li>
                        <li>To engage in any other conduct that restricts or inhibits anyone's use or
                            enjoyment of the<br/> website, or which as determined by us, may harm the
                            Company or users of the website, or<br/> expose them to liability.</li>
                    </ul>
                    <br />
                    Additionally, you agree not to:
                    <ul class=' list-outside list-disc ml-6 space-y-2 mt-5'>
                        <li>Use the Website in any manner that could disable, overburden, damage, or
                            impair the site or<br/> interfere with any other party's use of the Website,
                            including their ability to engage in real-time<br/> activities through the Website.</li>
                        <li>Use any robot, spider, or other automatic device, process, or means to access
                            the Website for<br/> any purpose, including monitoring or copying any of the
                            material on the Website.</li>
                        <li>Use any manual process to monitor or copy any of the material on the
                            Website, or for any other<br/> purpose not expressly authorized in these Terms of
                            Service, without our prior written consent.</li>
                        <li>Use any device, software, or routine that interferes with the proper working
                            of the Website.</li>
                        <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material
                            that is malicious or<br/> technologically harmful.</li>
                        <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt
                            any parts of the<br/> Website, the server on which the Website is stored, or any
                            server, computer, or database<br/> connected to the Website.</li>
                        <li>Attack the Website via a denial-of-service attack or a distributed denial-of-
                            service attack.</li>
                        <li>Otherwise attempting to interfere with the proper working of the Website.</li>
                    </ul>

                </div>
                <div class="pt-5 font-bold">
                    6. Intellectual Property Rights
                </div>
                <div class="pt-5 ">
                    The Website and its entire contents, features, and functionality (including but not
                    limited to all<br/> information, software, text, displays, images, video, and audio, and the
                    design, selection, and<br/> arrangement thereof) are owned by the Company, its
                    licensors, or other providers of such material and<br/> are protected by Canada and
                    international copyright, trademark, patent, trade secret, and other<br/> intellectual
                    property or proprietary rights laws.
                    <br /><br />
                    These Terms of Service permit you to use the Website for your personal, non-
                    commercial use only. You<br/> must not reproduce, distribute, modify, create derivative
                    works of, publicly display, publicly perform,<br/> republish, download, store, or transmit
                    any of the material on our Website, except as follows:
                    <br />

                    <ul class=' list-outside list-disc ml-6 mt-5 space-y-2'>
                        <li>Your computer may temporarily store copies of such material in RAM
                            incidental to your<br/> accessing and viewing those materials.</li>
                        <li>You may store files that are automatically cached by your Web browser for
                            display<br/> enhancement purposes.</li>
                        <li>You may print or download one copy of a reasonable number of pages of the
                            Website for your<br/> own personal, non-commercial use and not for further
                            reproduction, publication or<br/> distribution.</li>
                    </ul>
                    <br />
                    You must not:
                    <br />
                    <ul class=' list-outside list-disc ml-6 mt-5 space-y-2'>
                        <li>Modify copies of any materials from this site.</li>
                        <li>Delete or alter any of the copyright, trademark, or other proprietary rights
                            notices from copies<br/> of materials from this site.</li>
                    </ul>
                    <br />
                    You must not access or use for any commercial purposes any part of the website or
                    any services or<br/> materials available through the Website.
                    <br /><br />
                    If you print, copy, modify, download, or otherwise use or provide any other person
                    with access to any<br/> part of the Website in breach of the Terms of Service, your right
                    to use the Website will stop<br/> immediately and you must, at our option, return or
                    destroy any copies of the materials you have made.<br/> No right, title, or interest in or
                    to the Website or any content on the Website is transferred to you, and<br/> all rights not
                    expressly granted are reserved by the Company. Any use of the Website not
                    expressly<br/> permitted by these Terms of Service is a breach of these Terms of Service
                    and may violate copyright,<br/> trademark, and other laws.

                </div>
                <div class="pt-5 font-bold">
                    7. Our Rights
                </div>
                <div class="pt-5 ">
                    We have the right, without provision of notice to:
                    <br />
                    <ul class=' list-outside list-disc ml-6 mt-5 space-y-2'>
                        <li>Take appropriate legal action, including, without limitation, referral to or
                            cooperation with law<br/> enforcement or regulatory authorities, or notifying the
                            harmed party of any illegal or<br/> unauthorized use of the Website; and</li>
                        <li>Terminate or suspend your access to all or part of the Website for any or no
                            reason, including,<br/> without limitation, any violation of these Terms of Service.</li>
                    </ul>
                    <br />
                    YOU WAIVE AND HOLD HARMLESS COMPANY AND ITS PARENT, SUBSIDIARIES,
                    AFFILIATES, AND THEIR<br/> RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS,
                    SERVICE PROVIDERS, CONTRACTORS,<br/> LICENSORS, LICENSEES, SUPPLIERS, AND
                    SUCCESSORS FROM ANY AND ALL CLAIMS RESULTING FROM<br/> ANY ACTION TAKEN BY
                    THE COMPANY AND ANY OF THE FOREGOING PARTIES RELATING TO ANY,<br/>
                    INVESTIGATIONS BY EITHER THE COMPANY OR BY LAW ENFORCEMENT
                    AUTHORITIES.
                </div>

                <div class="pt-5 font-bold">
                    8. Third-Party Links and Content
                </div>
                <div class="pt-5 ">
                    For your convenience, this Website may provide links or pointers to third-party sites
                    or third-party<br/> content. We make no representations about any other websites or
                    third-party content that may be<br/> accessed from this Website. If you choose to access
                    any such sites, you do so at your own risk. We have<br/> no control over the third-party
                    content or any such third-party sites and accept no responsibility for<br/> such sites or
                    for any loss or damage that may arise from your use of them. You are subject to
                    any terms<br/> and conditions of such third-party sites.
                </div>

                <div class="pt-5 font-bold">
                    9. Reviews and Comments
                </div>
                <div class="pt-5 ">
                    Hostelmatch and its affiliates take no responsibility and assume no liability for any Review posted,<br />
                    stored, transmitted or uploaded to the Hostelmatch Sites by you or any third party, or for any loss or<br />
                    damage thereto, nor are Hostelmatch or its affiliates liable for any mistakes, defamation, slander, libel,<br />
                    omissions, falsehoods, obscenity, pornography or profanity you may encounter. Hostelmatch and its<br />
                    affiliates are not liable for any statements, representations or any other content provided by its users<br />
                    (including you as to your Content) in the websites or any other forum.<br />
                    <br />                
                    <br />
                    Although We have no obligation to screen, edit or monitor any Review posted to or distributed through<br />
                    the Hostelmatch website, We reserve the right to adjust, refuse, screen, translate, edit or remove<br />
                    Reviews at Our sole discretion without notice at any time and for any reason. Hostelmatch does not<br />
                    compensate or otherwise reward a customer for completing a Review. The guest review form should be<br />
                    regarded as a survey and does not include any (further commercial) offers, invitations, or incentives<br />
                    whatsoever. Hostelmatch undertakes to use its best efforts to monitor and remove Reviews that include<br />
                    obscenities or the mention of an individual’s name or reference to stolen goods.<br />
                </div>

                <div class="pt-5 font-bold">
                    10. User Profile Registration
                </div>
                <div class="pt-5 ">
                    In order to make a transaction on our website, you must be at least 18 years of age, or the age of legal<br />
                    majority in your jurisdiction (if that age is older than 18), to obtain an Account. Account registration<br />
                    requires you to submit certain personal information, such as your name, email address, username,<br />
                    password (“Profile Information”), and at least one valid payment method (either a credit card or<br />
                    accepted payment partner).
                    <br />
                    <br />
                    You agree to maintain accurate, complete, and up-to-date Profile Information in your Account. Your<br />
                    failure to maintain accurate, complete, and up-to-date Profile Information may result in your inability to<br />
                    access and use the Services or our termination of your Account.<br />
                </div>

                <div class="pt-5 font-bold">
                    11. Services
                </div>
                <div class="pt-5 ">
                    Through our website, we facilitate the purchase of the Hostehop Platform Ltd. membership that gives<br />
                    you access to discounts on hostel accommodation, and other travel related services. The annual<br />
                    membership will expire and have no further use or value one (1) year from the date of your purchase<br />
                    and will automatically be renewed unless selected otherwise. The membership benefits will expire and<br />
                    have no further use or value one (1) year from the date of your purchase if you decide to not renew<br />
                    your membership. We also help you discover the right hostel based on your preferences. All hostel<br />
                    recommendations are made using data and are to be used as “recommendation” and is at the sole<br />
                    discretion of the customer to choose or make another booking. HostelHop Platform Ltd. WILL IN NO<br />
                    WAY BE LIABLE FOR YOUR DISLIKE TOWARDS A HOSTEL OR IF THE HOSTEL STANDARD DOES NOT MATCH<br />
                    THE VIBE SPECIFIED ON OUR PLATFORM.
                    <br />
                    <br />
                    For purposes of this section and the Cancellation and Expiration sections below, “use” of the HosteHop<br />
                    Platform Ltd. membership means any reservation made through our website or through any other<br />
                    website using our membership perks, whether or not such reservation is canceled or used.<br />
                    <br />
                    <br />
                    You understand and agree that even with the purchase of the Hostehop Platform Ltd. membership, we<br />
                    do not guarantee the availability of any hostel or other benefits and take no responsibility for your<br />
                    reservation and booking made with them. In the event that there are no available hostels in the location<br />
                    you desire accommodation or on your intended dates for travel, you will be wholly and solely<br />
                    responsible for sourcing your own lodging accommodations. We shall in no way be responsible for<br />
                    facilitating lodging for you when there is no availability at participating hostels.<br />
                </div>

                <div class="pt-5 font-bold">
                    12. Liability & Disclaimers
                </div>
                <div class="pt-5 ">
                    We are acting solely as an agent on behalf of the travel service provider (and not as your agent) when<br />
                    processing bookings. As such, HostelHop Platform Ltd. is not a party to the contract between you and<br />
                    the travel services provider for the provision of travel services (including accommodation and<br />
                    cancellations) and We have no responsibility or liability to you in respect of the terms of that contract.<br />
                    For example, We are not responsible for the accuracy or completeness of the descriptions of<br />
                    accommodation and other travel services (including rates, availability and ratings) that are displayed on<br />
                    the Hostelmatch Sites, or the quality or fitness for purpose of the accommodation and other travel<br />
                    services that are or may be booked through the Hostelmatch Sites.<br />
                    <br />
                    <br />
                    Neither We nor any of Our directors, employees, affiliates or other representatives will be liable to you<br />
                    (or any member of your corporate group, your affiliates or any other person or party who has an<br />
                    interest in the booking) for: (i) indirect, punitive, special or consequential loss or damages, (ii) loss of<br />
                    data, income, profits, business, opportunity, reputation, goodwill or (iii) loss of or damage to property,<br />
                    in each case arising out of or in connection with the use of any information, products, services, facilities<br />
                    and/or the materials offered through the HostelMatch site, even if We have been advised of the<br />
                    possibility of such loss or damage, or such loss or damages were reasonably foreseeable.<br />
                    <br />
                    <br />
                    Prior to making a booking, you should ensure that you have reviewed the travel services provider's<br />
                    terms and conditions and that they are acceptable to you.
                    <br />
                    <br />
                    We have not visited all the accommodation listed on the Hostelmatch’s site and We do not carry out<br />
                    routine checks of the accommodation. The listing of any travel services (including accommodation) on<br />
                    Hostelmatch’s Website, is not and should not be taken as a specific recommendation from us or a<br />
                    representation that the travel services will be suitable for your purpose or that the travel services will be<br />
                    of any particular quality.
                    <br />
                    <br />
                    Save as otherwise set out in these Terms, and to the greatest extent permitted by applicable law, all<br />
                    representations, warranties and conditions, including those implied by statute or otherwise, are hereby<br />
                    excluded, including without limitation representations, warranties or undertakings about any of the<br />
                    services, facilities, information and/or materials on the Hostelmatch’s sites, including without limitation,<br />
                    their accuracy, their completeness or their merchantability, quality or fitness for a particular purpose.<br />
                    The Hostelmatch site is provided strictly on an "as is" basis and, in particular, We do not warrant that<br />
                    the information published on the Hostelmatch site will be error-free or that the Hostelmatch site will be<br />
                    virus or bug-free
                    <br />
                    <br />
                    Nothing in these Terms shall operate to exclude or limit liability arising out of: (a) fraud or fraudulent<br />
                    misrepresentation; or (b) death or personal injury.
                </div>

                <div class="pt-5 font-bold">
                    13. Payment Security
                </div>
                <div class="pt-5 ">
                We make reasonable efforts to ensure that all credit card and debit card transactions carried out via the<br />
                Hostelmatch site is secure. HOWEVER, if unauthorized charges appear on your credit card or debit card<br />
                statement for any card used on the Hostelmatch Site at any time during or after you make your booking,<br />
                conduct your transaction or disclose your card details on the Hostelmatch Site, Hostelmatch shall not be<br />
                liable or responsible in any way in respect of any damage or loss of whatsoever nature suffered by you<br />
                arising from or in any way connected with said use, transaction or disclosure, save where such<br />
                unauthorized charges appear as a direct result of Our negligence and subject to any statutory rights<br />
                which you may have.
                </div>

                <div class="pt-5 font-bold">
                    14. How We Limit Our Liability to You
                </div>
                <div class="pt-5 ">
                EXCEPT WHERE SUCH EXCLUSIONS ARE PROHIBITED BY LAW, IN NO EVENT SHALL THE COMPANY NOR<br />
                ITS RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS,<br />
                LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS BE LIABLE UNDER THESE TERMS OF SERVICE TO<br />
                YOU OR ANY THIRD-PARTY FOR ANY CONSEQUENTIAL, INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL, OR<br />
                PUNITIVE DAMAGES WHATSOEVER, INCLUDING ANY DAMAGES FOR BUSINESS INTERRUPTION, LOSS OF<br />
                USE, DATA, REVENUE OR PROFIT, COST OF CAPITAL, LOSS OF BUSINESS OPPORTUNITY, LOSS OF<br />
                GOODWILL, WHETHER ARISING OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), ANY<br />
                OTHER THEORY OF LIABILITY, OR OTHERWISE, REGARDLESS OF WHETHER SUCH DAMAGES WERE<br />
                FORESEEABLE AND WHETHER OR NOT THE COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH<br />
                DAMAGES.
                </div>

                <div class="pt-5 font-bold">
                    15. General
                </div>
                <div class="pt-5 ">
                    You agree that no joint venture, partnership, or employment relationship exists between you and us as a<br />
                    result of these Terms, your use of our website.
                    <br /><br />
                    Our performance under these Terms is subject to existing laws and legal process, and nothing contained<br />
                    in these Terms limits our right to comply with law enforcement or other governmental or legal requests<br />
                    or requirements relating to your use of our website, or information provided to or gathered by us with<br />
                    respect to such use.
                    <br /><br />
                    If any part of these Terms is found to be invalid, illegal or unenforceable, the validity, legality and<br />
                    enforceability of the remaining provisions will not in any way be affected or impaired. Our failure or<br />
                    delay in enforcing any provision of these Terms does not waive our right to enforce the same or any<br />
                    other provision(s) of these Terms in the future.
                    <br /><br />
                    These Terms (and any other terms and conditions referenced herein) constitutes the entire agreement<br />
                    between you and us with respect to our website, our Services and your dealings and relationships with us,<br /> 
                    and it supersedes all prior or contemporaneous communications and proposals, whether electronic,<br />
                    oral, or written, between you and us. A printed version of these Terms and of any notice given in<br />
                    electronic form shall be admissible in judicial, arbitration or any other administrative proceedings to the<br />
                    same extent and subject to the same conditions as other business documents and records originally<br />
                    generated and maintained in printed form. 
                    <br /><br />     
                    These Terms, their subject matter and their formation (and any non-contractual disputes or claims) are<br />
                    governed by Canadian law. The parties agree to the exclusive jurisdiction of the courts of Canada.
                </div>

                <div class="pt-5 font-bold">
                    16. Indemnification
                </div>
                <div class="pt-5 ">
                To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless<br />
                Company, its parent, subsidiaries, affiliates, and their respective directors, officers, employees, agents,<br />
                service providers, contractors, licensors, suppliers, successors, and assigns from and against any claims,<br />
                liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys'<br />
                fees) arising out of or relating to your breach of these Terms of Service or your use of the Website<br />
                including, but not limited to, third-party sites and content, any use of the Website's content and services<br />
                other than as expressly authorized in these Terms of Service or any use of any goods, digital products<br />
                and information purchased from this Website.
                </div>
                <div class="pt-5 font-bold">
                    17. Privacy Policy
                </div>
                <div class="pt-5 ">
                    Your provision of personal information through the Website is governed by our privacy policy located at<br />
                    /privacy-policy (the <strong >"Privacy Policy"</strong>)
                </div>

                <div class="pt-5 font-bold">
                    18. Governing Law
                </div>
                <div class="pt-5 ">
                The Website and these Terms of Service will be governed by and construed in accordance with the laws<br />
                of Canada, without giving effect to any choice or conflict of law provision, principle, or rule and<br />
                notwithstanding your domicile, residence, or physical location. Any action or proceeding arising out of or<br />
                relating to this Website and/or under these Terms of Service will be instituted in the courts of the<br />
                Province of Ontario, and each party irrevocably submits to the exclusive jurisdiction of such courts in any<br />
                such action or proceeding. You waive any and all objections to the exercise of jurisdiction over you by<br />
                such courts and to the venue of such courts.
                    <br /><br />
                    The parties agree that the United Nations Convention on Contracts for the International Sale of Goods<br />
                    will not govern these Terms of Service or the rights and obligations of the parties under these Terms of<br />
                    Service.
                </div>

                <div class="pt-5 font-bold">
                    19. Severability
                </div>
                <div class="pt-5 ">
                If any provision of these Terms of Service is illegal or unenforceable under applicable law, the remainder<br />
                of the provision will be amended to achieve as closely as possible the effect of the original term and all<br />
                other provisions of these Terms of Service will continue in full force and effect.
                </div>

                <div class="pt-5 font-bold">
                    20. Entire Terms of Service
                </div>
                <div class="pt-5 ">
                    These Terms of Service constitute the entire and only Terms of Service between the parties in relation to<br />
                    its subject matter and replaces and extinguishes all prior or simultaneous Terms of Services,<br />
                    undertakings, arrangements, understandings or statements of any nature made by the parties or any of<br />
                    them whether oral or written (and, if written, whether or not in draft form) with respect to such subject<br />
                    matter. Each of the parties acknowledges that they are not relying on any statements, warranties or<br />
                    representations given or made by any of them in relation to the subject matter of these Terms of<br />
                    Service, save those expressly set out in these Terms of Service, and that they shall have no rights or<br />
                    remedies with respect to such subject matter otherwise than under these Terms of Service save to the<br />
                    extent that they arise out of the fraud or fraudulent misrepresentation of another party. No variation of<br />
                    these Terms of Service shall be effective unless it is in writing and signed by or on behalf of Company.
                </div>

                <div class="pt-5 font-bold">
                    21. SERVICE HELP
                </div>
                <div class="pt-5 ">
                    For quick answers to your questions or ways to contact us, you can write to us at:<br />
                    <strong>info@hostelmatch.com</strong>
                </div>
            </div>




            <ToastContainer />

        </div>
    )
}

export default TermsAndConditions;