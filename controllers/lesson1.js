const laurelRoute = (req, res) => {
  res.send(`Laurel`);
};
const richardRoute = (req, res) => {
  res.send(`Richard`);
};

const laurelCompleteRoute =(req, res) => {
   res.send(`Laurel Cerrato Ramirez`);
};
module.exports ={
    laurelRoute,
    laurelCompleteRoute,
    richardRoute
};