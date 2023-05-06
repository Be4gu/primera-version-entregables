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

export const FILE_TEMPLATE = {
  swagger: '2.0',
  info: {
    'x-ibm-name': 'iberinformapis',
    title: 'IberinformApis',
    version: '1.0.0',
    contact: {
      name: 'Iberinform',
      url: 'https://www.iberinform.es/',
      email: 'api.support@iberinform.es'
    }
  },
  schemes: ['https'],
  host: 'apipre.iberinform.es',
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    APIKeyHeader: {
      type: 'apiKey',
      in: 'header',
      name: 'X-IBM-Client-Id'
    },
    ClientSecretHeader: {
      type: 'apiKey',
      in: 'header',
      name: 'X-IBM-Client-Secret',
      description: 'Unique token directly related to the client contract'
    }
  },
  security: [
    {
      APIKeyHeader: [],
      ClientSecretHeader: []
    }
  ],
  tags: [],
  paths: '---',
  definitions: '---',
  basePath: '/',
  'x-ibm-configuration': {
    enforced: true,
    testable: true,
    phase: 'realized',
    cors: {
      enabled: true
    }
  }
}

export const REF_REGEX = new RegExp(/"\$ref":"#\/definitions\/[\w]*"/gm)

export const DB_PATHS = {
  endPoints: 'paths',
  definitions: 'definitions'
}

export const TAGS_LIST = {
  Identification: {
    name: 'Identification',
    description: 'Identification data about the organisations'
  },
  CompanyData: {
    name: 'Company Data',
    description: 'Company data about the organisations'
  },
  TradingData: {
    name: 'Trading Data',
    description: 'Trading data about organisations'
  },
  FinancialData: {
    name: 'Financial Data',
    description: 'Financial data about the organisations'
  },
  Incidents: {
    name: 'Incidents',
    description: 'Incidents data about the organisations'
  },
  RiskAnalysis: {
    name: 'Risk Analysis',
    description: 'Risk Analysis data about the organisations'
  },
  ProductReports: {
    name: 'Product Reports',
    description: 'Product Reports'
  },
  Companies: {
    name: 'Companies',
    description: 'Methods for search organisations'
  },
  Rankings: {
    name: 'Rankings',
    description: 'Rankings data about the organisations'
  },
  Tenders: {
    name: 'Tenders',
    description: 'Information about Tenders'
  },
  Alerts: {
    name: 'Alerts',
    description: 'Methods for alerts'
  }
}

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
