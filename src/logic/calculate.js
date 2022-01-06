const rounded = (num) => {
  return +(Math.round(num + 'e+2') + 'e-2');
};

const calculate = (stateObj) => {
  let {
    items,
    lot: {
      input: {
        fleteImpuestos,
        tramiteImportacion,
        fleteReal,
        agenteAduanero,
        logisticaInterna,
        ivaOrigen,
        fleteOrigen,
        otros,
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
      },
    },
  } = stateObj;

  // Clear lot output
  ivaCourier = 0;
  totalLogisticaInt = 0;
  fodinfa = 0;
  arancel = 0;
  ivaAduana = 0;
  totalAduana = 0;
  isd = 0;
  pesoTotal = 0;

  // Declare aux lot variables
  let totalItems = 0;

  // Extract articles input values and calculate variables
  items.forEach((item) => {
    // Calculate aux item values
    item.exwValue = item.cantidad * item.precioUnitario;
    item.pesoItem = item.cantidad * item.peso;

    // Asign values to lot variables
    pesoTotal += item.pesoItem;
    totalItems += item.exwValue;
  });

  // Calculate lot aux variables
  let costoTotal = totalItems + (totalItems * ivaOrigen) / 100 + fleteOrigen;

  // Set articles output values
  items.forEach((item) => {
    // Calculate values
    const costoTotalUnitario = costoTotal;
    const gananciaUnitaria = (item.margen * costoTotalUnitario) / 100;
    const pvpUnitario = gananciaUnitaria + costoTotalUnitario;

    // Asign values to item variables
    item.costoTotalUnitario = rounded(costoTotalUnitario);
    item.gananciaUnitaria = rounded(gananciaUnitaria);
    item.pvpUnitario = rounded(pvpUnitario);
  });

  return {
    items,
    lot: {
      input: {
        fleteImpuestos,
        tramiteImportacion,
        fleteReal,
        agenteAduanero,
        logisticaInterna,
        ivaOrigen,
        fleteOrigen,
        otros,
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
      },
    },
  };
};

export default calculate;
