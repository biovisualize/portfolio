// Project data
window.projects = [
  {
    id: 'medable-ds',
    title: 'Medable Design System',
    description: 'Components for Reporting and eCOA',
    information: 'At Medable, I design products for collecting and visualizing data in clinical trials. I designed and prototyped various component systems to build these products faster in a consistent and accesible way.',
    thumbnail: 'img/medable_ds_translation.jpg',
    sections: [
      {
        type: 'single',
        images: ['img/medable_ds_translation.jpg'],
        caption: 'Translation report',
        description: 'Study and eCOA translation UX with inline report'
      },
      {
        type: 'trio',
        images: [
          'img/medable_ds_ecoa.jpg',
          'img/medable_ds_charts.jpg',
          'img/medable_ds_sb2.jpg'
        ],
        captions: [
          'eCOA system',
          'Chart system',
          'Components code'
        ],
        descriptions: [
          'eCOA mobile component system and screen types',
          'Chart and report design system',
          'Chart and report code components'
        ]
      },
      {
        type: 'single',
        images: ['img/medable_ds_os_tree.jpg'],
        caption: 'UX research',
        description: 'Example of Opportunity and Solution Tree'
      },
      {
        type: 'trio',
        images: [
          'img/medable_ds_ex1.jpg',
          'img/medable_ds_ex2.jpg',
          'img/medable_ds_sb1.jpg'
        ],
        captions: [
          'Example 1',
          'Example 2',
          'Code example'
        ],
        descriptions: [
          'Study archival report',
          'Site dashboard',
          'Site dashboard example in code'
        ]
      },
      {
        type: 'trio',
        images: [
          'img/medable_ds_library.jpg',
          'img/medable_ds_details_section.jpg',
          'img/medable_ds_screen_section.jpg'
        ],
        captions: [
          'Medable eCOA library',
          'eCOA details',
          'eCOA builder'
        ],
        descriptions: [
          'Library of eCOA activities',
          'Details section',
          'Visual builder for complex eCOA'
        ]
      },
    ]
  },
  {
    id: 'heavyai-immerse',
    title: 'Heavy.AI Immerse',
    description: 'Dashboards on GPU database',
    information: 'I worked at Heavy.AI (previously MapD/Omnisci) for 5 years. That\'s when I transitioned from frontend engineering to being a full time UX designer. Heavy.AI Immerse is a dashboarding system to interact with very large datasets (billions of data points) in real time and accelerate A.I. algorithms using a clever GPU database.',
    thumbnail: 'img/heavyai_immerse_thumb.jpg',
    sections: [
      {
        type: 'single',
        images: ['img/immerse_hero.jpg'],
        caption: 'Immerse dashboard',
        description: 'Cell tower signal visualization'
      },
      {
        type: 'trio',
        images: [
          'img/immerse_example1.jpg',
          'img/immerse_example2.jpg',
          'img/immerse_example3.jpg'
        ],
        captions: [
          'US census',
          'US flights',
          'Bridges'
        ],
        descriptions: [
          '1 billion data points',
          '200 million flights with delay',
          'Criticality assessment'
        ]
      },
      {
        type: 'trio',
        images: [
          'img/immerse_example4.jpg',
          'img/immerse_example5.jpg',
          'img/immerse_example6.jpg'
        ],
        captions: [
          'US census',
          'US census',
          'US census'
        ],
        descriptions: [
          'Historical redlining',
          'Redistricting and gerrymandering',
          '300 people per dot'
        ]
      },
      {
        type: 'single',
        images: ['img/immerse_big1.jpg'],
        caption: 'NYC taxi tipping trends',
        description: '1 billion taxi runs'
      },
      {
        type: 'trio',
        images: [
          'img/immerse_3d1.jpg',
          'img/immerse_3d2.jpg',
          'img/immerse_3d3.jpg'
        ],
        captions: [
          '3D prototype',
          '3D wells',
          '3D terrain'
        ],
        descriptions: [
          'First iteration of 3D chart',
          'Well bore points',
          'Terrain test'
        ]
      },
      {
        type: 'single',
        images: ['img/immerse_big2.jpg'],
        caption: '3D buildings',
        description: 'San Francisco LIDAR data'
      },
      {
        type: 'trio',
        images: [
          'img/immerse_example7.jpg',
          'img/immerse_example8.jpg',
          'img/immerse_example9.jpg'
        ],
        captions: [
          'Buildings',
          'Wildfire',
          'US ship movement'
        ],
        descriptions: [
          'California buildings dashboard',
          'Wildfire impact and risk',
          'Time of transmission by ship type and length'
        ]
      },
    ]
  },
  {
    id: 'planetos-powerboard',
    title: 'PlanetOS Powerboard',
    description: 'Wind farm operational dashboards',
    information: 'At PlanetOS (now part of Intertrust) I was a Data visualization, design system and frontend engineer. PlanetOS Powerboard was an application of their environmental data aggregation platform to the IoT and particularly the wind farm industry.',
    thumbnail: 'img/planetos_powerboard_thumb.jpg',
    sections: [
      {
        type: 'single',
        images: ['img/powerboard_hero.jpg'],
        caption: 'Main operational dashboard',
        description: ''
      },
      {
        type: 'trio',
        images: [
          'img/powerboard_windfarm.jpg',
          'img/powerboard_forecast.jpg',
          'img/powerboard_ds.jpg'
        ],
        captions: [
          'Wind farm performance overview',
          'Weather forecast integration',
          'Data science analysis view'
        ],
        descriptions: []
      },
      {
        type: 'single',
        images: ['img/powerboard_big.jpg'],
        caption: 'Full operational view',
        descriptions: []
      }
    ]
  },
  {
    id: 'planetos-dataviz',
    title: 'PlanetOS Data Visualization',
    description: 'Interactive visualization system',
    information: 'At PlanetOS (now part of Intertrust) I was a Data visualization, design system and frontend engineer. I learned geospatial visualization and developed custom maps for special environmental data needs. This dataviz system was used for all products and custom interactive reports.',
    thumbnail: 'img/planetos_dataviz_thumb.jpg',
    sections: [
      {
        type: 'single',
        images: ['img/dataviz_hero.jpg'],
        caption: 'Main visualization interface',
        description: ''
      },
      {
        type: 'trio',
        images: [
          'img/dataviz_gdp1.jpg',
          'img/dataviz_gdp2.jpg',
          'img/dataviz_gdp3.jpg'
        ],
        captions: [
          'GDP data visualization',
          'Economic indicators view',
          'Interactive data exploration'
        ],
        descriptions: []
      },
      {
        type: 'single',
        images: ['img/dataviz_big.jpg'],
        caption: 'Full-screen data view',
        description: ''
      },
      {
        type: 'trio',
        images: [
          'img/dataviz_special.jpg',
          'img/dataviz_cirrus.jpg',
          'img/dataviz_algo.jpg'
        ],
        captions: [
          'Specialized visualization mode',
          'Cloud data integration',
          'Algorithm visualization'
        ],
        descriptions: []
      }
    ]
  },
  {
    id: 'planetos-datahub',
    title: 'PlanetOS Datahub',
    description: 'Environmental data platform',
    information: 'At PlanetOS (now part of Intertrust) I was a Data visualization, design system and frontend engineer. PlanetOS Datahub was an aggregation platform for environmental data. It was ingesting and indexing large datasets to serve them under a convenient API.',
    thumbnail: 'img/planetos_datahub_thumb.jpg',
    sections: [
      {
        type: 'single',
        images: ['img/datahub_hero.jpg'],
        caption: 'Main platform interface'
      },
      {
        type: 'trio',
        images: [
          'img/datahub_exchange1.jpg',
          'img/datahub_exchange2.jpg',
          'img/datahub_exchange3.jpg'
        ],
        captions: [
          'Data exchange overview',
          'Dataset management',
          'API integration view'
        ],
        descriptions: []
      },
      {
        type: 'single',
        images: ['img/datahub_big.jpg'],
        caption: 'Full platform view',
        descriptions: []
      }
    ]
  },
  {
    id: 'heavyai-design-system',
    title: 'Heavy.AI Design System',
    description: 'Charts, UI, UX patterns',
    information: 'I worked at Heavy.AI (previously MapD/Omnisci) for 5 years. That\'s when I transitioned from frontend engineering to being a full time UX designer. In both roles I was in charge of the design and charting system that all the apps were based on.',
    thumbnail: 'img/heavyai_ds_thumb.jpg',
    sections: [
      {
        type: 'single',
        images: ['img/heavyds_big.jpg'],
        caption: 'Chart editor panel',
        description: 'Options by chart type'
      },
      {
        type: 'trio',
        images: [
          'img/heavyds_edit1.jpg',
          'img/heavyds_edit2.jpg',
          'img/heavyds_edit3.jpg'
        ],
        captions: [
          'Map editor',
          'Map editor',
          'Map editor'
        ],
        descriptions: [
          'Color palettes',
          'Pointmap editor',
          'Basemap theme'
        ]
      },
      {
        type: 'single',
        images: ['img/heavyds_components_big.jpg'],
        caption: 'Complete component system',
        description: 'Chart, forms, filters, layouts, etc.'
      },
      {
        type: 'trio',
        images: [
          'img/heavyds_otherscreen1.jpg',
          'img/heavyds_otherscreen2.jpg',
          'img/heavyds_otherscreen3.jpg'
        ],
        captions: [
          'Data library',
          'SQL editor',
          'Landing page'
        ],
        descriptions: [
          'UX to connect to datasets',
          'Dataset management',
          'Dashboard list'
        ]
      },
      {
        type: 'single',
        images: ['img/heavyds_iteration_big.jpg'],
        caption: 'Editor iteration',
        description: 'One of the audit cycle'
      },
      {
        type: 'trio',
        images: [
          'img/heavyds_darkmode1.jpg',
          'img/heavyds_darkmode2.jpg',
          'img/heavyds_darkmode3.jpg'
        ],
        captions: [
          'Light mode',
          'Dark mode',
          'At NVIDIA conference'
        ],
        descriptions: [
          'Original theme',
          'Dark mode theme',
          'First version to show on giant display'
        ]
      }
    ]
  },
  {
    id: 'datameer',
    title: 'Datameer Business Infographics',
    description: 'Big Data dashboarding on Hadoop',
    information: 'I moved from Montreal to San Francisco to work at Datameer after I finished my PhD in 2012. Datameer is a data transformation tool for Big Data, originally built on top of Hadoop. Our project was to build a freeform "Business Infographics Designer" for Big Data.',
    thumbnail: 'img/datameer_thumb.jpg',
    sections: [
      {
        type: 'single',
        images: ['img/datameer_big.jpg'],
        caption: 'Chart designer',
        description: 'Data selector to build charts'
      },
      {
        type: 'trio',
        images: [
          'img/datameer_app.jpg',
          'img/datameer_editor.jpg',
          'img/datameer_ecosystem.jpg'
        ],
        captions: [
          'Datameer app',
          'Editor panels',
          'Big data ecosystem visualization'
        ],
        descriptions: [
          'Datameer business infographics',
          'Freeform editor controls',
          'Products working on Hadoop'
        ]
      },
      {
        type: 'single',
        images: ['img/datameer_designer_big.jpg'],
        caption: 'Datameer Business Infographics Designer',
        description: 'Freeform editor' 
      },
      {
        type: 'trio',
        images: [
          'img/datameer_dashboard1.jpg',
          'img/datameer_dashboard2.jpg',
          'img/datameer_dashboard3.jpg'
        ],
        captions: [
          'Twitter app',
          'Twitter happiness',
          'Click path analysis'
        ],
        descriptions: [
          'Social network visualization',
          'Sentiment analysis',
          'Website monitoring'
        ]
      },
    ]
  }
];

