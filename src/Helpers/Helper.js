// helper.js

export function calculateFlooringCost(data) {
    const flooringCosts = {
        Carpet: 7,
        Vinyl: 7,
        Ceramic: 0,
        Wood: 20,
    };

    const LandValue = data.LandValue;
    const PurchaseDate = data.purchaseDate;
    const PurchaseMonth = PurchaseDate.getMonth() + 1;
    const MonthlyDeprecation = 1 / (27.5 * 12);

    const YearOneDeprecation = MonthlyDeprecation * (12 - PurchaseMonth);

    const refrigeratorCost = 1200;
    const DishWaherCost = 1200;
    const KitchenSinkCost = 300;
    const sinkDisposerCost = 0;
    const StoveRangeOvenCost = 1800;
    const ClothesWasherCost = 500;
    const ClothesDryerCost = 350;
    const CabinatesCost = 2000;
    const CounterTopCost = 250;

    const ApplianceCost = {
        Refrigerator: 1000,
        DishWasher: 1000,
        SinkDisposer: 200,
        StoveRangeOven: 1500,
    };

    const ElectricalAndPlumbingCost = {
        Refrigerator: 200,
        DishWasher: 500,
        KitchenSink: 300,
        SinkDisposer: 300,
        StoveRangeOven: 300,
        ClothesWasher: 500,
        ClothesDryer: 350,
    };

    const CabinetryCost = {
        Cabinates: 2000,
        CounterTop: 250,
    };

    let totalFloorCost = 0;

    let totalAppliancesCost = 0;
    let totalElectricalAndPlumbingCost = 0;
    let totalCabinetryCost = 0;

    const firstBedRoomFloor = data.Bedrooms[0].flooring;
    // console.log(`frcost`, firstRoomCost.flooring);
    const firstBedRoomCost = flooringCosts[firstBedRoomFloor];
    totalFloorCost = firstBedRoomCost * 144;

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
    const kitchenArea = 144;
    const kitchenCost = kitchenFlooringCost * kitchenArea;
    totalFloorCost += kitchenCost;

    //totalApplicance Cost
    if (data.Refrigerator === "yes") {
        totalAppliancesCost += ApplianceCost.Refrigerator;
    }
    if (data.DishWasher === "yes") {
        totalAppliancesCost += ApplianceCost.DishWasher;
    }
    if (data.SinkDisposer === "yes") {
        totalAppliancesCost += ApplianceCost.SinkDisposer;
    }

    if (data.StoveRangeOven === "yes") {
        totalAppliancesCost += ApplianceCost.StoveRangeOven;
    }

    //totalElectricalAndPlumbingCost
    if (data.Refrigerator === "yes") {
        totalElectricalAndPlumbingCost +=
            ElectricalAndPlumbingCost.Refrigerator;
    }
    if (data.DishWasher === "yes") {
        totalElectricalAndPlumbingCost += ElectricalAndPlumbingCost.DishWasher;
    }
    if (data.SinkDisposer === "yes") {
        totalElectricalAndPlumbingCost +=
            ElectricalAndPlumbingCost.SinkDisposer;
    }

    if (data.StoveRangeOven === "yes") {
        totalElectricalAndPlumbingCost +=
            ElectricalAndPlumbingCost.StoveRangeOven;
    }
    if (data.ClothesWasher === "yes") {
        totalElectricalAndPlumbingCost +=
            ElectricalAndPlumbingCost.ClothesWasher;
    }
    if (data.ClothesDryer === "yes") {
        totalElectricalAndPlumbingCost +=
            ElectricalAndPlumbingCost.ClothesDryer;
    }

    //CabinetryCost
    if (data.Cabinates === "yes") {
        totalCabinetryCost += CabinetryCost.Cabinates;
    }
    if (data.CounterTop === "yes") {
        totalCabinetryCost += CabinetryCost.CounterTop;
    }

    //LivingAreaFloorCost
    const numberOfBedrooms = data.Bedrooms.length;
    const BedRoomSqft = numberOfBedrooms * 144;
    const NumberofBathRooms = data.Bathrooms.length;
    const BathRoomSqft = NumberofBathRooms * 100;
    const kithenSqft = 144;

    const HomeSqFt = data.HomeSqFt;
    const ApporxLivingSqFt =
        (HomeSqFt - BedRoomSqft - BathRoomSqft - kithenSqft) * 0.9;
    const AccurateLivingSqFt = ApporxLivingSqFt.toFixed(2);

    console.log("acul", AccurateLivingSqFt);

    const LivingAreaFlooringType = data.LivingAreaFlooring;
    const LivingAreaFlooringConst = flooringCosts[LivingAreaFlooringType];
    const LivingAreaCost = LivingAreaFlooringConst * AccurateLivingSqFt;
    totalFloorCost += LivingAreaCost;

    //ResidentialBuildingCost
    const ResidentialBuildingCost =
        data.purchasePrice -
        data.LandValue -
        totalAppliancesCost -
        totalElectricalAndPlumbingCost -
        totalFloorCost -
        totalCabinetryCost;

    //TotalcostBasis
    const TotalcostBasis =
        data.LandValue +
        ResidentialBuildingCost +
        totalFloorCost +
        totalAppliancesCost +
        totalElectricalAndPlumbingCost +
        totalCabinetryCost;

    //ResidentialTaxDepreciationInOneYear

    const ResidentialTaxDepreciationInOneYear =
        YearOneDeprecation * ResidentialBuildingCost;

    //BonusDepreciation
    let BonusDepreciation = 1;

    if (PurchaseDate.getFullYear() === "2023") {
        BonusDepreciation = 0.8;
    } else if (PurchaseDate.getFullYear() === "2024") {
        BonusDepreciation = 0.6;
    } else if (PurchaseDate.getFullYear() === "2025") {
        BonusDepreciation = 0.4;
    } else if (PurchaseDate.getFullYear() === "2026") {
        BonusDepreciation = 0.2;
    } else if (PurchaseDate.getFullYear() > "2026") {
        BonusDepreciation = 0;
    } else {
        BonusDepreciation = 1;
    }

    const RemaningTaxDepreciationInOneYear =
        (totalFloorCost +
            totalAppliancesCost +
            totalElectricalAndPlumbingCost +
            totalCabinetryCost) *
        BonusDepreciation;

    const TotalTaxDepreciationInOneYear =
        ResidentialTaxDepreciationInOneYear + RemaningTaxDepreciationInOneYear;

    console.log(totalFloorCost);
    return TotalTaxDepreciationInOneYear.toFixed();
}
