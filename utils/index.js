const INRtoUSDRatio = 0.014

const convertINRToUSD = (amount) => {
	return amount * INRtoUSDRatio
}

module.exports = {
	convertINRToUSD,
}
