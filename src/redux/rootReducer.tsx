

interface initialStateInterface {
    open: boolean,
    shipments: any[],
    sortByDate: string,
    sortByStatus: string,
}

const initialState:initialStateInterface = {
    open: true,
    sortByDate: 'no',
    sortByStatus: 'no',
    shipments: [
        {
            destination: 'Valencia-Barcelona',
            number: 'F34332334',
            truck: 'Iveco 80E18',
            weight: 800,
            status: 'delayed',
            status_main: 'arrival',
            departure_date: '14/10/2023',
            arrival_date: '09/10/2023',
            time_delay: '5:05 h',
            img: 'track.png',
            busy_weigh: 0
        },
        {
            destination: 'Madrid-Barcelona',
            number: 'D32323232',
            truck: 'Iveco 80E18',
            weight: 800,
            status: 'delayed',
            status_main: 'arrival',
            departure_date: '13/10/2023',
            arrival_date: '08/10/2023',
            time_delay: '5:05 h',
            img: 'track.png',
            busy_weigh: 0
        },
        {
            destination: 'Valencia-Barcelona',
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
            destination: 'Valencia-Barcelona',
            number: 'H343223',
            truck: 'Iveco 80E18',
            weight: 800,
            status: 'delayed',
            status_main: 'departure',
            departure_date: '10/10/2023',
            arrival_date: '15/10/2023',
            time_delay: '5:05 h',
            img: 'track.png',
            busy_weigh: 20,
        },
        {
            destination: 'Valencia-Barcelona',
            number: 'P3434323',
            truck: 'Iveco 80E18',
            weight: 800,
            status: 'delayed',
            status_main: 'departure',
            departure_date: '10/10/2023',
            arrival_date: '15/10/2023',
            time_delay: '5:05 h',
            img: 'track.png',
            busy_weigh: 20,
        },
        {
            destination: 'Valencia-Barcelona',
            number: 'T3435234',
            truck: 'Iveco 80E18',
            weight: 800,
            status: 'delayed',
            status_main: 'available',
            departure_date: '10/10/2023',
            arrival_date: '15/10/2023',
            time_delay: '5:05 h',
            img: 'track.png',
            busy_weigh: 100
        },
        {
            destination: 'Valencia-Barcelona',
            number: 'E4543254',
            truck: 'Iveco 80E18',
            weight: 800,
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
            };
           

        case "updateshipments":
                return {
                    open: state.open,
                    shipments: state.shipments,
                    sortByDate: state.sortByDate,
                    sortByStatus: state.sortByStatus,
                };
        case "updatesortbydate":
                return {
                        open: state.open,
                        shipments: state.shipments,
                        sortByDate: action.payload,
                        sortByStatus: state.sortByStatus,
                };


                case "updatesortbystatus":
                    return {
                            open: state.open,
                            shipments: state.shipments,
                            sortByDate: state.sortByDate,
                            sortByStatus:  action.payload,
                    };
          

        default:
            return state
    }
}
