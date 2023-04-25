export const INPUT_INFO = [
  {
    labelText: 'Número de contrato',
    id: 'num',
    type: 'text',
    placeholder: 'Example: .....'
  },
  {
    labelText: 'Nombre del cliente',
    id: 'name',
    type: 'text',
    placeholder: 'Example: .....'
  },
  {
    labelText: 'X-IBM-CLIENT-ID',
    id: 'clientID',
    type: 'text',
    placeholder: 'Example: .....'
  },
  {
    labelText: 'X-IBM-CLIENT-SECRET',
    id: 'clientSecret',
    type: 'text',
    placeholder: 'Example: .....'
  }
]

export const APIS_LIST = [
  'activity',
  'identificationDetails',
  'resume',
  'consolidatedBalanceSheetAndIncomeStatement',
  'consolidatedCashFlows',
  'consolidatedEquityChanges',
  'consolidatedFinancialAccounts',
  'consolidatedFinancialConnections',
  'consolidatedFinancialRatios',
  'notesConsolidatedAccounts',
  'notesOrdinaryAccounts',
  'ordinaryBalanceSheetAndIncomeStatement',
  'ordinaryCashFlows',
  'ordinaryEquityChanges',
  'ordinaryFinancialAccounts',
  'ordinaryFinancialConnections',
  'ordinaryFinancialRatios',
  'sales',
  'additionalFinancialData',
  'activityIncidents',
  'incidents',
  'asnefdata',
  'delinquencyFiles',
  'banks',
  'customers',
  'employees',
  'facilities',
  'providers',
  'riskControlElements',
  'trademarksEO',
  'deedsPublishedInBormeEO',
  'corporateBodies',
  'officialGazetteOfMercantileRegistryDetail',
  'tradingInformation',
  'iberPlusReportEO',
  'investigatedReportEO',
  'rankings',
  'evaluation',
  'organisations',
  'alerts',
  'alertTypes',
  'countries',
  'subscriptions',
  'cpvs',
  'tenders',
  'v2',
  'awardee',
  'awarder',
  'identifierType'
]

export function HTMLTemplate(str) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Swagger UI</title>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Source+Code+Pro:300,600|Titillium+Web:400,600,700"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.2.2/swagger-ui.css"
      />
      <style>
        html {
          box-sizing: border-box;
          overflow: -moz-scrollbars-vertical;
          overflow-y: scroll;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          background: #fafafa;
        }
      </style>
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.2.2/swagger-ui-bundle.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.2.2/swagger-ui-standalone-preset.js"></script>
      <script>
        window.onload = function () {
          var spec = ${str}
          const ui = SwaggerUIBundle({
            spec: spec,
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
            plugins: [SwaggerUIBundle.plugins.DownloadUrl],
            layout: 'StandaloneLayout'
          })
          window.ui = ui
        }
      </script>
    </body>
  </html>`
}
