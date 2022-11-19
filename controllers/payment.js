const express = require('express')
const router = express.Router()

const { convertINRToUSD } = require('../utils')

// GET /getPaymentMethods
router.get('/get-payment-methods', (_req, res) => {
	const paymentModes = [
		{
			id: 1,
			name: 'Credit Card',
			description: 'Pay with your credit card',
		},
		{
			id: 2,
			name: 'Debit Card',
			description: 'Pay with your debit card',
		},
		{
			id: 3,
			name: 'Net Banking',
			description: 'Pay with your net banking account',
		},
		{
			id: 4,
			name: 'UPI',
			description: 'Pay with your UPI account',
		},
		{
			id: 5,
			name: 'Wallet',
			description: 'Pay with your wallet',
		},
	]

	res.json({
		message: 'Payment methods fetched successfully',
		data: paymentModes,
	})
})

// POST /makePayment
router.post('/make-payment', (req, res) => {
	const { amount, mode } = req.body
	const convertedAmount = convertINRToUSD(amount)
	res.json({
		message: 'Payment Successfull ✅',
		amount: convertedAmount,
		currency: 'USD',
		mode,
	})
})

module.exports = router
