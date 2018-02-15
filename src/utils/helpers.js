const filterOwned = (currencies => currencies.filter(currency => {
    return parseFloat(currency.free, 10) > 0;
}));

export { filterOwned };
