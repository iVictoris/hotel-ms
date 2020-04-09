const generateAmenities = () => {
    return Math.floor(Math.random() * 5 + 1);
};

const generateRooms = (amount) => {
    return Array(amount)
        .fill({})
        .reduce(
            (prev, current, index) => ({
                ...prev,
                [index + 1]: {
                    id: index + 1,
                    number: index + 1,
                    bed: generateAmenities(),
                    bath: generateAmenities(),
                    cable: true,
                    internet: true,
                    fullKitchen: true,
                    status: 'available',
                },
            }),
            {},
        );
};

export const rooms = generateRooms(100);
