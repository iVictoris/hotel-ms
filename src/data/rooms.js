const generateAmenities = () => {
    return Math.floor(Math.random() * 5 + 1);
};

const generateRooms = (amount) => {
    return Array(amount)
        .fill({})
        .map((_, index) => ({
            index: {
                id: index,
                number: index,
                bed: generateAmenities(),
                bath: generateAmenities(),
                cable: true,
                internet: true,
                fullKitchen: true,
                booked: false,
            },
        }));
};

export const rooms = generateRooms(100);
