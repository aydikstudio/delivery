

interface initialStateInterface {
    open: boolean,
    shipments: any[],
    parcels: any[],
    sortByDate: string,
    sortByStatus: string,
    city: string,
}

const initialState:initialStateInterface = {
    open: true,
    sortByDate: 'no',
    sortByStatus: 'no',
    city: 'no',
    parcels: [
        {checkbox: false, parcel_number: 159, volume_weight: 200, admission_date: '24/10/2024'},
        {checkbox: false, parcel_number: 158, volume_weight: 200, admission_date: '24/10/2024'},
        {checkbox: false, parcel_number: 157, volume_weight: 200, admission_date: '24/10/2024'},
        {checkbox: false, parcel_number: 156, volume_weight: 100, admission_date: '24/10/2024'},
    ],
    shipments: [
        {
            from: 'Valencia',
            to: 'Barcelona',
            number: 'F34332334',
            truck: 'Iveco 80E18',
            weight: 400,
            status: 'delayed',
            status_main: 'arrival',
            departure_date: '14/10/2023',
            arrival_date: '09/10/2023',
            time_delay: '3:05 h',
            busy_weigh: 0
        },
        {
            from: 'Barcelona',
            to: 'Madrid',
            number: 'D32323232',
            truck: 'Iveco 80E18',
            weight: 600,
            status: 'delayed',
            status_main: 'arrival',
            departure_date: '13/10/2023',
            arrival_date: '08/10/2023',
            time_delay: '2:05 h',
            busy_weigh: 0
        },
        {
            from: 'Madrid',
            to: 'Valencia',
            number: 'G343434',
            truck: 'Iveco 80E18',
            weight: 800,
            status: 'arrives',
            status_main: 'arrival',
            departure_date: '15/10/2023',
            arrival_date: '10/10/2023',
            time_delay: '-',
            busy_weigh: 0
        },
        {
            from: 'Seville',
            to: 'Barcelona',
            number: 'H343223',
            truck: 'Iveco 80E18',
            weight: 300,
            status: 'delayed',
            status_main: 'departure',
            departure_date: '10/10/2023',
            arrival_date: '15/10/2023',
            time_delay: '4:05 h',
            busy_weigh: 20,
        },
        {
            from: 'Madrid',
            to: 'Seville',
            number: 'P3434323',
            truck: 'Iveco 80E18',
            weight: 500,
            status: 'delayed',
            status_main: 'departure',
            departure_date: '10/10/2023',
            arrival_date: '15/10/2023',
            time_delay: '5:05 h',
            busy_weigh: 20,
        },
        {
            from: 'Valencia',
            to: 'Bilbao',
            number: 'T3435234',
            truck: 'Iveco 80E18',
            weight: 700,
            status: 'delayed',
            status_main: 'available',
            departure_date: '10/10/2023',
            arrival_date: '15/10/2023',
            time_delay: '5:05 h',
            busy_weigh: 100,
            parcels: [],
            upper_tier:[
                {
                    upper_tier_id: 1,
                    active: false,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 2,
                    active: true,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 3,
                    active: true,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 4,
                    active: false,
                    type: 'upper',
                    busy: false
                }
            ],
            middle_tier:[
                {
                    middle_tier_id: 1,
                    active: false,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 2,
                    active: true,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 3,
                    active: true,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 4,
                    active: false,
                    type: 'middle',
                    busy: false
                }
            ],
           lower_tier:[
                {
                    lower_tier_id: 1,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 2,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 3,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 4,
                    active: false,
                    type: 'lower',
                    busy: false
                }
            ],
        },
        {
            from: 'Valencia',
            to: 'Barcelona',
            number: 'T3332234',
            truck: 'Iveco 80E18',
            weight: 700,
            status: 'delayed',
            status_main: 'available',
            departure_date: '14/10/2023',
            arrival_date: '19/10/2023',
            time_delay: '5:05 h',
            busy_weigh: 400,
            parcels: [],
            upper_tier:[
                {
                    upper_tier_id: 1,
                    active: false,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 2,
                    active: true,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 3,
                    active: true,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 4,
                    active: false,
                    type: 'upper',
                    busy: false
                }
            ],
            middle_tier:[
                {
                    middle_tier_id: 1,
                    active: false,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 2,
                    active: true,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 3,
                    active: true,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 4,
                    active: false,
                    type: 'middle',
                    busy: false
                }
            ],
           lower_tier:[
                {
                    lower_tier_id: 1,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 2,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 3,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 4,
                    active: false,
                    type: 'lower',
                    busy: false
                }
            ],
        },
        {
            from: 'Bilbao',
            to: 'Valencia',
            number: 'E4543254',
            truck: 'Iveco 80E18',
            weight: 100,
            status: 'delayed',
            status_main: 'available',
            departure_date: '10/10/2023',
            arrival_date: '15/10/2023',
            time_delay: '5:05 h',
            busy_weigh: 100,
            parcels: [],
            upper_tier:[
                {
                    upper_tier_id: 1,
                    active: false,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 2,
                    active: true,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 3,
                    active: true,
                    type: 'upper',
                    busy: false
                },
                {
                    upper_tier_id: 4,
                    active: false,
                    type: 'upper',
                    busy: false
                }
            ],
            middle_tier:[
                {
                    middle_tier_id: 1,
                    active: false,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 2,
                    active: true,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 3,
                    active: true,
                    type: 'middle',
                    busy: false
                },
                {
                    middle_tier_id: 4,
                    active: false,
                    type: 'middle',
                    busy: false
                }
            ],
           lower_tier:[
                {
                    lower_tier_id: 1,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 2,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 3,
                    active: true,
                    type: 'lower',
                    busy: false
                },
                {
                    lower_tier_id: 4,
                    active: false,
                    type: 'lower',
                    busy: false
                }
            ],
        }
    ]
}

export function rootReducer(state = initialState, action : any): initialStateInterface {
    switch (action.type) {
        case "switchsidebar":
            return {
                open: !state.open,
                shipments: state.shipments,
                sortByDate: state.sortByDate,
                sortByStatus: state.sortByStatus,
                city: state.city,
                parcels: state.parcels
            };
           

        case "updateshipments":
                return {
                    open: state.open,
                    shipments: action.payload,
                    sortByDate: state.sortByDate,
                    sortByStatus: state.sortByStatus,
                    city: state.city,
                    parcels: state.parcels
                };
        case "updatesortbydate":
                return {
                        open: state.open,
                        shipments: state.shipments,
                        sortByDate: action.payload,
                        sortByStatus: state.sortByStatus,
                        city: state.city,
                        parcels: state.parcels
                };


                case "updatesortbystatus":
                    return {
                            open: state.open,
                            shipments: state.shipments,
                            sortByDate: state.sortByDate,
                            sortByStatus:  action.payload,
                            city: state.city,
                            parcels: state.parcels
                    };
                
                    case "updatecity":
                        return {
                                open: state.open,
                                shipments: state.shipments,
                                sortByDate: state.sortByDate,
                                sortByStatus: state.sortByStatus,
                                city: action.payload,
                                parcels: state.parcels
                        };

                        case "updateparcels":
                            return {
                                    open: state.open,
                                    shipments: state.shipments,
                                    sortByDate: state.sortByDate,
                                    sortByStatus: state.sortByStatus,
                                    city: state.city,
                                    parcels: action.payload
                            };
          

        default:
            return state
    }
}
