const Seller = require("../models/Seller");

const getSellers = (req, res) => {
  Seller.find((err, todos) => {
    if (err) {
      res.status(500).json({ msg: err });
    }
    res.json(todos);
  });
};

const getSeller = async (req, res) => {
  const seller = await Seller.findOne({identification: req.params.id})

  if(seller)
    res.json(seller);

  else
    res.json({})
};

const createSeller = (req, res) => {
  const seller = new Seller({
    identification: req.body.identification,
    name: req.body.name,
    email: req.body.email,
  });

  seller.save((err, seller) => {
    if (err) {
      res.status(500).json({ msg: err });
    }

    res.json(seller);
  });
};

module.exports = {
  getSellers,
  createSeller,
  getSeller
};
