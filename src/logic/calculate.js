const rounded = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2');
};

const calculate = (stateObj) => {
  let {
    items,
    lot: {
      input: {
        tramiteImportacion,
        agenteAduanero,
        logisticaInterna,
        ivaOrigen,
        fleteOrigen,
        comisionBancaria,
        fleteImportacion,
      },
      output: {
        ivaCourier,
        totalLogisticaInt,
        fodinfa,
        arancel,
        ivaAduana,
        totalAduana,
        isd,
        totalFOBItems,
        totalCIFItems,
      },
    },
    pesoTotal,
  } = stateObj;

  // Clear lot output
  ivaCourier = 0;
  totalLogisticaInt = 0;
  fodinfa = 0;
  arancel = 0;
  ivaAduana = 0;
  totalAduana = 0;
  isd = 0;
  totalFOBItems = 0;
  totalCIFItems = 0;

  // Declare aux lot variables
  const fleteInternacional = pesoTotal * fleteImportacion;

  // Extract articles input values and calculate EXW values
  items.forEach((item) => {
    // Calculate aux item values
    item.pesoItem = item.cantidad * item.peso;
    item.itemEXWValue =
      (item.cantidad * item.precioUnitario * (100 + ivaOrigen)) / 100;

    // Asign values to lot variables
  });

  // Calculate FOB and CIF values
  items.forEach((item) => {
    const weigthFraction = item.pesoItem / pesoTotal;

    // Calculate aux FOB item values
    item.itemFOBValue = item.itemEXWValue + fleteOrigen * weigthFraction;
    item.itemISD = item.itemFOBValue * 0.05;

    // Calculate aux CIF item values
    item.itemCIFValue =
      (item.itemFOBValue + fleteInternacional * weigthFraction) * 1.01;
    item.itemFODINFA = item.itemCIFValue * 0.005;
    item.itemArancel = (item.itemCIFValue * item.arancel) / 100;

    // Asign values to lot variables
    isd += item.itemISD;
    fodinfa += item.itemFODINFA;
    arancel += item.itemArancel;
    totalFOBItems += item.itemFOBValue;
    totalCIFItems += item.itemCIFValue;
  });

  let baseCourier = tramiteImportacion + fleteInternacional + agenteAduanero;

  // Set articles output values
  items.forEach((item) => {
    const weigthFraction = item.pesoItem / pesoTotal;
    const fobValueFraction = item.itemFOBValue / totalFOBItems;
    // Calculate values
    const costoTotalUnitario =
      item.itemFOBValue +
      item.itemFODINFA +
      item.itemArancel +
      item.itemISD +
      baseCourier * weigthFraction +
      comisionBancaria * fobValueFraction;
    const gananciaUnitaria =
      costoTotalUnitario / ((100 - item.margen) / 100) - costoTotalUnitario;
    const pvpUnitario =
      gananciaUnitaria +
      costoTotalUnitario +
      (logisticaInterna / 1.12) * weigthFraction;

    console.log(costoTotalUnitario);
    console.log(gananciaUnitaria);
    console.log(pvpUnitario);

    // Asign values to item variables
    item.costoTotalUnitario = rounded(costoTotalUnitario);
    item.gananciaUnitaria = rounded(gananciaUnitaria / item.cantidad);
    item.pvpUnitario = rounded(pvpUnitario / item.cantidad);
  });

  // Set lot output variables
  ivaAduana = (totalCIFItems + fodinfa + arancel) * 0.12;
  totalAduana = ivaAduana + fodinfa + arancel;
  ivaCourier = baseCourier * 0.12;
  totalLogisticaInt = baseCourier + ivaCourier;

  // Format lot output variables
  ivaCourier = rounded(ivaCourier);
  totalLogisticaInt = rounded(totalLogisticaInt);
  fodinfa = rounded(fodinfa);
  arancel = rounded(arancel);
  ivaAduana = rounded(ivaAduana);
  totalAduana = rounded(totalAduana);
  isd = rounded(isd);
  pesoTotal = rounded(pesoTotal);
  totalFOBItems = rounded(totalFOBItems);
  totalCIFItems = rounded(totalCIFItems);

  return {
    items,
    lot: {
      input: {
        tramiteImportacion,
        agenteAduanero,
        logisticaInterna,
        ivaOrigen,
        fleteOrigen,
        comisionBancaria,
        fleteImportacion,
      },
      output: {
        ivaCourier,
        totalLogisticaInt,
        fodinfa,
        arancel,
        ivaAduana,
        totalAduana,
        isd,
        pesoTotal,
        totalCIFItems,
        totalFOBItems,
      },
    },
  };
};

export default calculate;
