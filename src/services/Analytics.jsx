import React from "react";
import ReactGA from 'react-ga4';

const UseAnalyticsEventTracker = (tracker) => {
    ReactGA.event({
        category: tracker.category,
        action: tracker.action,
        label: tracker.label,
      });
}
export default UseAnalyticsEventTracker;