

interface initialStateInterface {
    open: boolean,
    shipments: any[],
    sortByDate: string,
    sortByStatus: string,
    city: string,
}

const initialState:initialStateInterface = {
    open: true,
    sortByDate: 'no',
    sortByStatus: 'no',
    city: 'no',
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
            img: 'track.png',
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
            img: 'track.png',
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
            img: 'track.png',
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
            img: 'track.png',
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
            img: 'track.png',
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
            img: 'track.png',
            busy_weigh: 100
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
            img: 'track.png',
            busy_weigh: 100
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
                city: state.city
            };
           

        case "updateshipments":
                return {
                    open: state.open,
                    shipments: state.shipments,
                    sortByDate: state.sortByDate,
                    sortByStatus: state.sortByStatus,
                    city: state.city
                };
        case "updatesortbydate":
                return {
                        open: state.open,
                        shipments: state.shipments,
                        sortByDate: action.payload,
                        sortByStatus: state.sortByStatus,
                        city: state.city
                };


                case "updatesortbystatus":
                    return {
                            open: state.open,
                            shipments: state.shipments,
                            sortByDate: state.sortByDate,
                            sortByStatus:  action.payload,
                            city: state.city
                    };
                
                    case "updatecity":
                        return {
                                open: state.open,
                                shipments: state.shipments,
                                sortByDate: state.sortByDate,
                                sortByStatus: state.sortByStatus,
                                city: action.payload
                        };
          

        default:
            return state
    }
}
