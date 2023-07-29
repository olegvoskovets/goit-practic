export const createService = async (collection, req, res) => {
  const result = await collection.create(req.body);
  res.status(201).json(result);
};
export const getAllService = async (collection, req, res) => {
  const result = await collection.find();
  res.json(result);
};
