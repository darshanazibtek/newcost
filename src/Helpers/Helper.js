// helper.js

export function calculateFlooringCost(data) {
    const flooringCosts = {
        Carpet: 7, // cost per square foot for carpet
        Vinyl: 7, // cost per square foot for vinyl
        Ceramic: 0,
        Wood: 20,
        // cost per square foot for ceramic
    };

    const refrigeratorCost = 1200;
    const DishWaherCost = 1200;
    const KitchenSinkCost = 300;
    const sinkDisposerCost = 0;
    const StoveRangeOvenCost = 1800;
    const ClothesWasherCost = 500;
    const ClothesDryerCost = 350;
    const CabinatesCost = 2000;
    const CounterTopCost = 250;

    let totalCost = 0;
    let totalFloorCost = 0;
    let totalEquipmentCost = 0;

    const firstBedRoomFloor = data.Bedrooms[0].flooring;
    // console.log(`frcost`, firstRoomCost.flooring);
    const firstBedRoomCost = flooringCosts[firstBedRoomFloor];
    const cost = firstBedRoomCost * 144;
    console.log(`const ${cost} = ${firstBedRoomCost} * 144`);

    for (let i = 1; i < data.Bedrooms.length; i++) {
        const room = data.Bedrooms[i];
        const flooringType = room.flooring;
        const flooringCost = flooringCosts[flooringType];
        const roomArea = 144; // assume all rooms have the same area
        const roomCost = flooringCost * roomArea;
        totalFloorCost += roomCost;
    }

    const kitchenFlooringType = data.KitchenFlooring;
    const kitchenFlooringCost = flooringCosts[kitchenFlooringType];
    const kitchenArea = 100;
    const kitchenCost = kitchenFlooringCost * kitchenArea;
    totalFloorCost += kitchenCost;

    if (data.Refrigerator === "yes") {
        totalEquipmentCost += refrigeratorCost;
    }

    if (data.DishWaher === "yes") {
        totalEquipmentCost += DishWaherCost;
    }

    if (data.KitchenSink === "yes") {
        totalEquipmentCost += KitchenSinkCost;
    }

    if (data.SinkDisposer === "yes") {
        totalEquipmentCost += sinkDisposerCost;
    }

    if (data.StoveRangeOven === "yes") {
        totalEquipmentCost += StoveRangeOvenCost;
    }

    if (data.ClothesWasher === "yes") {
        totalEquipmentCost += ClothesWasherCost;
    }

    if (data.ClothesDryer) {
        totalEquipmentCost += ClothesDryerCost;
    }

    if (data.Cabinates) {
        totalEquipmentCost += CabinatesCost;
    }
    if (data.CounterTop) {
        totalEquipmentCost += CounterTopCost;
    }

    const numberOfBedrooms = data.Bedrooms.length;
    const BedRoomSqft = numberOfBedrooms * 144;
    const NumberofBathRooms = data.Bathrooms.length;
    const BathRoomSqft = NumberofBathRooms * 100;
    const kithenSqft = 100;

    const HomeSqFt = data.HomeSqFt;
    const ApporxLivingSqFt = HomeSqFt - BedRoomSqft - BathRoomSqft - kithenSqft;
    const AccurateLivingSqFt = 0.9 * ApporxLivingSqFt;

    const LivingAreaFlooringType = data.LivingAreaFlooring;
    const LivingAreaFlooringConst = flooringCosts[LivingAreaFlooringType];
    const LivingAreaCost = LivingAreaFlooringConst * AccurateLivingSqFt;
    totalFloorCost += LivingAreaCost;

    totalCost = totalFloorCost + totalEquipmentCost;

    return totalCost.toFixed(2);
}
