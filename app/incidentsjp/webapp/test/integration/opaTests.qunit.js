sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/incidentsjp/test/integration/FirstJourney',
		'ns/incidentsjp/test/integration/pages/IncidentsList',
		'ns/incidentsjp/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/incidentsjp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);