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

  function rounded(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }

  const baseCourier = tramiteImportacion + fleteReal + agenteAduanero;
  ivaCourier = rounded(baseCourier * 0.12);
  totalLogisticaInt = rounded(baseCourier + ivaCourier);

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
