import { Formik } from 'formik';
import * as yup from 'yup';
import StyledForm from './ContactForm.component';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/operations';
import { getContacts } from '../../store/selectors';

const phoneRegExp = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';
// /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = yup.object().shape({
  contactName: yup
    .string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is Required field'),
  contactPhone: yup
    .string()
    .matches(phoneRegExp, 'Phone number must be like +919367788755')
    .required('Number is Required field'),
});

const initialValues = {
  contactName: '',
  contactPhone: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    //    onContactAdd(values);
    console.log('submitted: ', values.contactName);
    if (
      contacts.find(
        el => el.contactName.toLowerCase() === values.contactName.toLowerCase()
      )
    ) {
      alert(`${values.contactName} is already exists in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <StyledForm>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm.Form>
          <StyledForm.Label>
            Contact Name:
            <StyledForm.Error name="contactName" component="span" />
            <StyledForm.Input type="text" name="contactName" />
          </StyledForm.Label>
          <StyledForm.Label>
            Phone Number:
            <StyledForm.Error name="contactPhone" component="span" />
            <StyledForm.Input type="tel" name="contactPhone" />
          </StyledForm.Label>
          <StyledForm.Button type="submit">Add Contact</StyledForm.Button>
        </StyledForm.Form>
      </Formik>
    </StyledForm>
  );
};
