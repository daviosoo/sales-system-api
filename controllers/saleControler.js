const Sale = require("../models/Sale");
const Seller = require("../models/Seller");

const getSales = (req, res) => {
  Sale.find((err, todos) => {
    if (err) {
      res.status(500).json({ msg: err });
    }
    res.json(todos);
  });
};

const getSale = async (req, res) => {
  const sale = await Sale.findOne({identification: req.params.id})

  if(sale)
    res.json(sale);

  else
    res.json({})
};

const createSale = async(req, res) => {
  const sale = new Sale({
    identificationSeller: req.body.identificationSeller,
    zone: req.body.zone,
    date: req.body.date,
    price: req.body.price,
  });

  sale.save((err, sale) => {
    if (err) {
      res.status(500).json({ msg: err });
    }

    res.json(sale);
  });

  const seller = await Seller.findOne({identification: sale.identificationSeller})

  if(seller)
  {
    const newComission = seller.commission + (sale.price * (sale.zone === 'Norte' ? 0.02 : 0.03))
    await Seller.updateOne({identification: sale.identificationSeller}, {$set: {commission: newComission}})
  }
};

module.exports = {
  getSales,
  createSale,
  getSale
};
