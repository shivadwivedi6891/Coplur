// Dummy data store
let formData = {
  id: 1,
  firstName: 'Shiva',
  lastName: 'Dwivedi',
  username: 'Shiva@123',
  emailId: 'dwivedishiva@gmail.com'
};


export const getFormData = (req, res) => {
  res.json(formData);
};


export const updateFormData = (req, res) => {
  const submitted = req.body;
  // Update dummy store
  formData = { ...formData, ...submitted };
  res.json({ status: 'success', data: formData });
};