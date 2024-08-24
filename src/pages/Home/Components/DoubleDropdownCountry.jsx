import React, { useState } from "react";
import "./DoubleDropdownCountry.css"

const DoubleDropdown = (props) => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [openCountry, setOpenCountry] = useState(null);
    const { text, onSelect } = props;

    const countries = {
        "Canada": [
            { text: 'Montreal', value: 'Montreal' },
            { text: 'Toronto', value: 'Toronto' },
            { text: 'Banff', value: 'Banff' },
            { text: 'Whistler', value: 'Whistler' },
            { text: 'Ottawa', value: 'Ottawa' },
            { text: 'Calgary', value: 'Calgary' },
            { text: 'Vancouver', value: 'Vancouver' },
            { text: 'Jasper', value: 'Jasper' },
            { text: 'Edmonton', value: 'Edmonton' },
            { text: 'Quebec City', value: 'Quebec-City' },
            { text: 'Halifax', value: 'Halifax' },
            { text: 'Victoria', value: 'Victoria' },
            { text: 'Canmore', value: 'Canmore' },
            { text: 'Hamilton', value: 'Hamilton' },
            { text: 'Thunder Bay', value: 'Thunder Bay' },
            { text: 'Fernie', value: 'Fernie' },
            { text: 'Saint John (New Brunswick)', value: 'Saint John New Brunswick' },
            // { text: 'Other', value: 'Other' },
        ],
        "USA": [
            { text: 'New York', value: 'New York' },
            { text: 'Miami', value: 'Miami' },
            { text: 'San Francisco', value: 'San Francisco' },
            { text: 'Los Angeles', value: 'Los Angeles' },
            { text: 'Honolulu', value: 'Honolulu' },
            { text: 'Atlanta', value: 'Atlanta' },
            { text: 'Chicago', value: 'Chicago' },
            { text: 'Denver', value: 'Denver' },
            { text: 'New Orleans', value: 'New Orleans' },
            { text: 'Orlando', value: 'Orlando' },
            { text: 'Philadelphia', value: 'Philadelphia' },
            { text: 'Portland', value: 'Portland' },
            { text: 'Seattle', value: 'Seattle' },
            // { text: 'Other', value: 'Other' },
        ],
        "Mexico": [
            { text: 'Bacalar', value: 'Bacalar' },
            { text: 'Cancun', value: 'Cancun' },
            { text: 'Guadalajara', value: 'Guadalajara' },
            { text: 'Sayulita', value: 'Sayulita' },
            { text: 'Barra de Potosi', value: 'Barra de Potosi' },
            { text: 'Cabo San Lucas', value: 'Cabo San Lucas' },
            { text: 'Campeche', value: 'Campeche' },
            { text: 'Chetumal', value: 'Chetumal' },
            { text: 'Chihuahua', value: 'Chihuahua' },
            { text: 'Ciudad Valles', value: 'Ciudad Valles' },
            { text: 'Cozumel', value: 'Cozumel' },
            { text: 'El Cuyo', value: 'El Cuyo' },
            { text: 'El Pescadero', value: 'El Pescadero' },
            { text: 'Guanajuato', value: 'Guanajuato' },
            { text: 'Huatulco', value: 'Huatulco' },
            { text: 'Isla Holbox', value: 'Isla Holbox' },
            { text: 'Isla Mujeres', value: 'Isla Mujeres' },
            { text: 'Ixtapa', value: 'Ixtapa' },
            { text: 'La Cruz de Huanacaxtle', value: 'La Cruz de Huanacaxtle' },
            { text: 'La Paz', value: 'La Paz' },
            { text: 'La Ventana', value: 'La Ventana' },
            { text: 'Leon', value: 'Leon' },
            { text: 'Lo De Marcos', value: 'Lo De Marcos' },
            { text: 'Merida', value: 'Merida' },
            { text: 'Mahahual', value: 'Mahahual' },
            { text: 'Malinalco', value: 'Malinalco' },
            { text: 'Mazunte', value: 'Mazunte' },
            { text: 'Mexico City', value: 'Mexico City' },
            { text: 'Monterrey', value: 'Monterrey' },
            { text: 'Morelia', value: 'Morelia' },
            { text: 'Palenque', value: 'Palenque' },
            { text: 'Playa del Carmen', value: 'Playa del Carmen' },
            { text: 'Poza Rica de Hidalgo', value: 'Poza Rica de Hidalgo' },
            { text: 'Progreso', value: 'Progreso' },
            { text: 'Puebla', value: 'Puebla' },
            { text: 'Puerto Escondido', value: 'Puerto Escondido' },
            { text: 'Puerto Morelos', value: 'Puerto Morelos' },
            { text: 'Puerto Vallarta', value: 'Puerto Vallarta' },
            { text: 'Punta de Mita', value: 'Punta de Mita' },
            { text: 'Queretaro', value: 'Queretaro' },
            { text: 'San Cristobal de las Casas', value: 'San Cristobal de las Casas' },
            { text: 'San Cristobal Las Casas', value: 'San Cristobal Las Casas' },
            { text: 'San Francisco', value: 'San Francisco' },
            { text: 'San Jose del Cabo', value: 'San Jose del Cabo' },
            { text: 'San Jose del Pacifico', value: 'San Jose del Pacifico' },
            { text: 'San Luis Potosi', value: 'San Luis Potosi' },
            { text: 'San Miguel de Allende', value: 'San Miguel de Allende' },
            { text: 'Taxco', value: 'Taxco' },
            { text: 'Tecamac', value: 'Tecamac' },
            { text: 'Tepic', value: 'Tepic' },
            { text: 'Tepoztlan', value: 'Tepoztlan' },
            { text: 'Tijuana', value: 'Tijuana' },
            { text: 'Tizimin', value: 'Tizimin' },
            { text: 'Todos Santos', value: 'Todos Santos' },
            { text: 'Troncones', value: 'Troncones' },
            { text: 'Tulum', value: 'Tulum' },
            { text: 'Tuxtla Gutierrez', value: 'Tuxtla Gutierrez' },
            { text: 'Uruapan', value: 'Uruapan' },
            { text: 'Valladolid', value: 'Valladolid' },
            { text: 'Valle de Bravo', value: 'Valle de Bravo' },
            { text: 'Veracruz', value: 'Veracruz' },
            { text: 'Xilitla', value: 'Xilitla' },
            { text: 'Zacatecas', value: 'Zacatecas' },
            { text: 'Zihuatanejo', value: 'Zihuatanejo' },
            { text: 'Zipolite', value: 'Zipolite' },
        ],
        "Spain": [
            { text: 'Barcelona', value: 'Barcelona' },
            { text: 'Seville', value: 'Seville' },
            { text: 'Granada', value: 'Granada' },
            { text: 'Zaragoza', value: 'Zaragoza' },
            { text: 'Valencia', value: 'Valencia' },
            { text: 'Algeciras', value: 'Algeciras' },
            { text: 'Alicante', value: 'Alicante' },
            { text: 'Argentera', value: 'Argentera' },
            { text: 'Asturias', value: 'Asturias' },
            { text: 'Bilbao', value: 'Bilbao' },
            { text: 'Cala Figuera', value: 'Cala Figuera' },
            { text: 'Calella', value: 'Calella' },
            { text: 'Carballo', value: 'Carballo' },
            { text: 'Cartagena', value: 'Cartagena' },
            { text: 'Conil de la Frontera', value: 'Conil de la Frontera' },
            { text: 'Cordoba', value: 'Cordoba' },
            { text: 'Cudillero', value: 'Cudillero' },
            { text: 'Cuenca', value: 'Cuenca' },
            { text: 'El Prat de Llobregat', value: 'El Prat de Llobregat' },
            { text: 'Estepona', value: 'Estepona' },
            { text: 'Fuerteventura', value: 'Fuerteventura' },
            { text: 'Gijon', value: 'Gijon' },
            { text: 'Girona', value: 'Girona' },
            { text: 'Gran Canaria', value: 'Gran Canaria' },
            { text: 'Haro', value: 'Haro' },
            { text: 'Hinojedo', value: 'Hinojedo' },
            { text: 'Jaen', value: 'Jaen' },
            { text: 'Huelva', value: 'Huelva' },
            { text: 'La Gomera', value: 'La Gomera' },
            { text: 'Lanzarote', value: 'Lanzarote' },
            { text: 'Las Palmas', value: 'Las Palmas' },
            { text: 'Lekeitio', value: 'Lekeitio' },
            { text: 'Leon', value: 'Leon' },
            { text: 'Llanes Asturias', value: 'Llanes Asturias' },
            { text: 'Llanes', value: 'Llanes' },
            { text: 'Lloret de Mar', value: 'Lloret de Mar' },
            { text: 'Loredo', value: 'Loredo' },
            { text: 'Lugo', value: 'Lugo' },
            { text: 'Madrid', value: 'Madrid' },
            { text: 'Malaga', value: 'Malaga' },
            { text: 'Manzanares el Real', value: 'Manzanares el Real' },
            { text: 'Marbella', value: 'Marbella' },
            { text: 'Marin', value: 'Marin' },
            { text: 'Menorca', value: 'Menorca' },
            { text: 'Monforte de Lemos', value: 'Monforte de Lemos' },
            { text: 'Murcia', value: 'Murcia' },
            { text: 'Muxia', value: 'Muxia' },
            { text: 'Oviedo', value: 'Oviedo' },
            { text: 'Palencia', value: 'Palencia' },
            { text: 'Pamplona', value: 'Pamplona' },
            { text: 'Picassent', value: 'Picassent' },
            { text: 'Ponferrada', value: 'Ponferrada' },
            { text: 'Pontevedra', value: 'Pontevedra' },
            { text: 'Salamanca', value: 'Salamanca' },
            { text: 'Salardu', value: 'Salardu' },
            { text: 'Salinas', value: 'Salinas' },
            { text: 'San Sebastian', value: 'San Sebastian' },
            { text: 'Santander', value: 'Santander' },
            { text: 'Santiago de Compostela', value: 'Santiago de Compostela' },
            { text: 'Sarria', value: 'Sarria' },
            { text: 'Somo', value: 'Somo' },
            { text: 'Tarifa', value: 'Tarifa' },
            { text: 'Tarragona', value: 'Tarragona' },
            { text: 'Toledo', value: 'Toledo' },
            { text: 'Tossa de Mar', value: 'Tossa de Mar' },
            { text: 'Valladolid', value: 'Valladolid' },
            { text: 'Vigo', value: 'Vigo' },
            { text: 'Vilafranca del Penedes', value: 'Vilafranca del Penedes' },
            { text: 'Villafranca Del Bierzo', value: 'Villafranca Del Bierzo' },
            { text: 'Villajoyosa', value: 'Villajoyosa' },
            { text: 'Vitoria', value: 'Vitoria' },
            { text: 'Zarautz', value: 'Zarautz' },
        ],
        "Portugal": [
            { text: 'Abrantes', value: 'Abrantes' },
            { text: 'Albufeira', value: 'Albufeira' },
            { text: 'Alcoutim', value: 'Alcoutim' },
            { text: 'Alijo', value: 'Alijo' },
            { text: 'Aljezur', value: 'Aljezur' },
            { text: 'Almada', value: 'Almada' },
            { text: 'Almancil', value: 'Almancil' },
            { text: 'Alvor', value: 'Alvor' },
            { text: 'Amarante', value: 'Amarante' },
            { text: 'Angra do Heroismo', value: 'Angra do Heroismo' },
            { text: 'Aveiro', value: 'Aveiro' },
            { text: 'Barcelos', value: 'Barcelos' },
            { text: 'Batalha', value: 'Batalha' },
            { text: 'Beja', value: 'Beja' },
            { text: 'Braga', value: 'Braga' },
            { text: 'Braganca', value: 'Braganca' },
            { text: 'Caminha', value: 'Caminha' },
            { text: 'Carcavelos', value: 'Carcavelos' },
            { text: 'Cascais', value: 'Cascais' },
            { text: 'Castelo Branco', value: 'Castelo Branco' },
            { text: 'Coimbra', value: 'Coimbra' },
            { text: 'Costa da Caparica', value: 'Costa da Caparica' },
            { text: 'Ericeira', value: 'Ericeira' },
            { text: 'Espinho', value: 'Espinho' },
            { text: 'Esposende', value: 'Esposende' },
            { text: 'Estoril', value: 'Estoril' },
            { text: 'Faja Grande', value: 'Faja Grande' },
            { text: 'Faro', value: 'Faro' },
            { text: 'Felgueiras', value: 'Felgueiras' },
            { text: 'Figueira da Foz', value: 'Figueira da Foz' },
            { text: 'Funchal', value: 'Funchal' },
            { text: 'Geres', value: 'Geres' },
            { text: 'Guarda', value: 'Guarda' },
            { text: 'Guimaraes', value: 'Guimaraes' },
            { text: 'Horta', value: 'Horta' },
            { text: 'Hortas do Tabual', value: 'Hortas do Tabual' },
            { text: 'Lagos', value: 'Lagos' },
            { text: 'Lamego', value: 'Lamego' },
            { text: 'Leiria', value: 'Leiria' },
            { text: 'Lisbon', value: 'Lisbon' },
            { text: 'Loule', value: 'Loule' },
            { text: 'Lourinha', value: 'Lourinha' },
            { text: 'Maceda', value: 'Maceda' },
            { text: 'Matosinhos', value: 'Matosinhos' },
            { text: 'Nazare', value: 'Nazare' },
            { text: 'Oeiras', value: 'Oeiras' },
            { text: 'Ovar', value: 'Ovar' },
            { text: 'Peniche', value: 'Peniche' },
            { text: 'Ponta Delgada', value: 'Ponta Delgada' },
            { text: 'Ponte de Lima', value: 'Ponte de Lima' },
            { text: 'Portimao', value: 'Portimao' },
            { text: 'Porto Covo', value: 'Porto Covo' },
            { text: 'Porto de Mos', value: 'Porto de Mos' },
            { text: 'Porto Santo Island', value: 'Porto Santo Island' },
            { text: 'Porto', value: 'Porto' },
            { text: 'Povoa de Varzim', value: 'Povoa de Varzim' },
            { text: 'Quarteira', value: 'Quarteira' },
            { text: 'Queluz', value: 'Queluz' },
            { text: 'Sagres', value: 'Sagres' },
            { text: 'Sao Pedro do Sul', value: 'Sao Pedro do Sul' },
            { text: 'Sardoal', value: 'Sardoal' },
            { text: 'Serta', value: 'Serta' },
            { text: 'Setubal', value: 'Setubal' },
            { text: 'Sintra', value: 'Sintra' },
            { text: 'Tavira', value: 'Tavira' },
            { text: 'Tomar', value: 'Tomar' },
            { text: 'Torres Vedras', value: 'Torres Vedras' },
            { text: 'Viana do Castelo', value: 'Viana do Castelo' },
            { text: 'Vila do Conde', value: 'Vila do Conde' },
            { text: 'Vila Nova de Cerveira', value: 'Vila Nova de Cerveira' },
            { text: 'Vila Nova de Famalicao', value: 'Vila Nova de Famalicao' },
            { text: 'Vila Nova de Foz Coa', value: 'Vila Nova de Foz Coa' },
            { text: 'Vila Nova de Milfontes', value: 'Vila Nova de Milfontes' },
            { text: 'Viseu', value: 'Viseu' }
        ],
        "Italy": [
            { text: 'Alessandria', value: 'Alessandria' },
            { text: 'Ameglia', value: 'Ameglia' },
            { text: 'Aquileia', value: 'Aquileia' },
            { text: 'Arezzo', value: 'Arezzo' },
            { text: 'Assisi', value: 'Assisi' },
            { text: 'Avigliana', value: 'Avigliana' },
            { text: 'Bari', value: 'Bari' },
            { text: 'Belluno', value: 'Belluno' },
            { text: 'Bologna', value: 'Bologna' },
            { text: 'Bormio', value: 'Bormio' },
            { text: 'Brescia', value: 'Brescia' },
            { text: 'Brindisi', value: 'Brindisi' },
            { text: 'Butera', value: 'Butera' },
            { text: 'Catania', value: 'Catania' },
            { text: 'Cinque Terre', value: 'Cinque Terre' },
            { text: 'Cisternino', value: 'Cisternino' },
            { text: 'Como', value: 'Como' },
            { text: 'Cortona', value: 'Cortona' },
            { text: 'Enna', value: 'Enna' },
            { text: 'Ercolano', value: 'Ercolano' },
            { text: 'Ferrara', value: 'Ferrara' },
            { text: 'Florence', value: 'Florence' },
            { text: 'Genoa', value: 'Genoa' },
            { text: 'Itri', value: 'Itri' },
            { text: 'La Spezia', value: 'La Spezia' },
            { text: 'Lake Como', value: 'Lake Como' },
            { text: 'Lecce', value: 'Lecce' },
            { text: 'Lecco', value: 'Lecco' },
            { text: 'Lipari', value: 'Lipari' },
            { text: 'Livorno', value: 'Livorno' },
            { text: 'Matera', value: 'Matera' },
            { text: 'Milan', value: 'Milan' },
            { text: 'Minori', value: 'Minori' },
            { text: 'Modena', value: 'Modena' },
            { text: 'Monza', value: 'Monza' },
            { text: 'Naples', value: 'Naples' },
            { text: 'Padua', value: 'Padua' },
            { text: 'Palermo', value: 'Palermo' },
            { text: 'Parma', value: 'Parma' },
            { text: 'Pavia', value: 'Pavia' },
            { text: 'Perugia', value: 'Perugia' },
            { text: 'Pescosolido', value: 'Pescosolido' },
            { text: 'Pisa', value: 'Pisa' },
            { text: 'Pompei', value: 'Pompei' },
            { text: 'Portofino', value: 'Portofino' },
            { text: 'Rimini', value: 'Rimini' },
            { text: 'Rome', value: 'Rome' },
            { text: 'Rovereto', value: 'Rovereto' },
            { text: 'San Vito Lo Capo', value: 'San Vito Lo Capo' },
            { text: 'Sorrento', value: 'Sorrento' },
            { text: 'Syracuse', value: 'Syracuse' },
            { text: 'Taormina', value: 'Taormina' },
            { text: 'Trapani', value: 'Trapani' },
            { text: 'Trent', value: 'Trent' },
            { text: 'Treviso', value: 'Treviso' },
            { text: 'Trieste', value: 'Trieste' },
            { text: 'Tropea', value: 'Tropea' },
            { text: 'Turin', value: 'Turin' },
            { text: 'Venice', value: 'Venice' },
            { text: 'Verona', value: 'Verona' },
            { text: 'Vicenza', value: 'Vicenza' },
            { text: 'Volterra', value: 'Volterra' }
        ],
        "England": [
            { text: 'Birmingham', value: 'Birmingham' },
            { text: 'Cambridge', value: 'Cambridge' },
            { text: 'Canterbury', value: 'Canterbury' },
            { text: 'Cheltenham', value: 'Cheltenham' },
            { text: 'Devon', value: 'Devon' },
            { text: 'Dover', value: 'Dover' },
            { text: 'Dulverton', value: 'Dulverton' },
            { text: 'Exeter', value: 'Exeter' },
            { text: 'Hebden Bridge', value: 'Hebden Bridge' },
            { text: 'Hull', value: 'Hull' },
            { text: 'Ilfracombe', value: 'Ilfracombe' },
            { text: 'Kirkby Stephen', value: 'Kirkby Stephen' },
            { text: 'Lake District', value: 'Lake District' },
            { text: 'Leeds', value: 'Leeds' },
            { text: 'Lewes', value: 'Lewes' },
            { text: 'Liverpool', value: 'Liverpool' },
            { text: 'London', value: 'London' },
            { text: 'Manchester', value: 'Manchester' },
            { text: 'Newcastle upon Tyne', value: 'Newcastle upon Tyne' },
            { text: 'Newquay', value: 'Newquay' },
            { text: 'Oxford', value: 'Oxford' },
            { text: 'Portland', value: 'Portland' },
            { text: 'Reading', value: 'Reading' },
            { text: 'Sheffield', value: 'Sheffield' },
            { text: 'Skipton', value: 'Skipton' },
            { text: 'Stratford Upon Avon', value: 'Stratford Upon Avon' },
            { text: 'Whitby', value: 'Whitby' },
        ],
        "Netherlands": [
            { text: 'Amsterdam', value: 'Amsterdam' },
            { text: 'Apeldoorn', value: 'Apeldoorn' },
            { text: 'Arnhem', value: 'Arnhem' },
            { text: 'Domburg', value: 'Domburg' },
            { text: 'Dordrecht', value: 'Dordrecht' },
            { text: 'Egmond', value: 'Egmond' },
            { text: 'Eindhoven', value: 'Eindhoven' },
            { text: 'Groningen', value: 'Groningen' },
            { text: 'Haarlem', value: 'Haarlem' },
            { text: 'Heemskerk', value: 'Heemskerk' },
            { text: 'Leeuwarden', value: 'Leeuwarden' },
            { text: 'Maastricht', value: 'Maastricht' },
            { text: 'Nijmegen', value: 'Nijmegen' },
            { text: 'Noordwijk', value: 'Noordwijk' },
            { text: 'Rotterdam', value: 'Rotterdam' },
            { text: 'The Hague', value: 'The Hague' },
            { text: 'Tilburg', value: 'Tilburg' },
            { text: 'Utrecht', value: 'Utrecht' },
            { text: 'Valkenswaard', value: 'Valkenswaard' },
            { text: 'Vlissingen', value: 'Vlissingen' },
            { text: 'West Terschelling', value: 'West Terschelling' },
            { text: 'Zaandam', value: 'Zaandam' },
            { text: 'Zwolle', value: 'Zwolle' }
        ]
    }

    // Function to handle country selection and toggle city dropdown    
    const handleCountrySelect = (country) => {
        if (openCountry === country) {
            setOpenCountry(null);
        } else {
            setOpenCountry(country);
        }
    };

    // Function to handle main button click
    const handleButtonClick = () => {
        setIsCountryDropdownOpen(!isCountryDropdownOpen);
        setOpenCountry(null);
        setSelectedCity("");
        setSelectedCountry("");
    };

    // Function to handle city selection
    const handleCitySelect = (country, city) => {
        onSelect?.(city);
        setSelectedCity(city);
        setSelectedCountry(country);
        setIsCountryDropdownOpen(false);
        setOpenCountry(null);
    };

    return (
        <div>
            <div className="dropdown inline-block relative w-full">
                <button className="bg-white p-4 pr- w-full lg:w-full rounded-[50px] md:rounded-xl font-semibold relative text-xs sm:text-sm h-12 md:h-20" onClick={handleButtonClick}>
                    {selectedCity === "" ? (
                        <span>Where</span>
                    ) : (
                        <span>{selectedCity}, {selectedCountry}</span>
                    )}
                    <svg
                        className="inline-block pr-2 w-6 h-6 absolute right-0 top-[50%] transform translate-y-[-50%]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {isCountryDropdownOpen && (
                    <ul className="dropdown-content absolute text-black-700 pt-1 w-full text-center z-[100]">
                        {Object.keys(countries).map(country => (
                            <div key={country}>
                                <li className="dropdown">
                                    <div className="bg-white border border-sun-300 font-bold py-2 px-4 flex items-center justify-between cursor-pointer text-sm" onClick={() => handleCountrySelect(country)}>
                                        <span>{country}</span>
                                        <svg
                                            className="inline-block pr-2 w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                    {openCountry === country && (
                                        <ul className="dropdown-content relative w-full max-h-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                            {countries[country].map(city => (
                                                <li key={city.value}>
                                                    <div className="bg-sun-200 hover:bg-sun-400 py-2 px-4 block whitespace-no-wrap text-sm cursor-pointer" onClick={() => handleCitySelect(country, city.value)}>
                                                        {city.text}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DoubleDropdown;
