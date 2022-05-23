export default () => ({
    posts: [
        {
            id: 0,
            title: 'title 0',
        },
        {
            id: 1,
            title: 'title 1',
        },
        {
            id: 2,
            title: 'title 2',
        }
    ],
    cars: [
        {
            id: 0,
            img: require('assets/img/car.jpg'),
            title: 'Козак',
            status: 'active',
            items: [
                {
                    text: 'car id=0 name 1',
                },
                {
                    text: 'car id=0 lorem 2',
                },
                {
                    text: 'car id=0 lorem 3',
                },
                {
                    text: 'car id=0 lorem 4',
                },
                {
                    text: 'car id=0 lorem 5',
                },
                {
                    text: 'car id=0 lorem 6',
                }
            ],
        },
        {
            id: 1,
            img: require('assets/img/car.jpg'),
            title: 'Козак',
            status: 'finished',
        },
        {
            id: 2,
            img: require('assets/img/car.jpg'),
            title: 'Козак',
            status: 'active',
            items: [
                {
                    text: 'car id=2 name 1',
                },
                {
                    text: 'car id=2 lorem 2',
                },
            ],
        },
        {
            id: 3,
            img: require('assets/img/car.jpg'),
            title: 'Козак',
            status: 'finished',
        }
    ]
})