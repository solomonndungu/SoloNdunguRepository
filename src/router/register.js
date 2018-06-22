import PersonalForm from '@/components/forms/register/PersonalForm';
import ContactForm from '@/components/forms/register/ContactForm';
import LocationForm from '@/components/forms/register/LocationForm';
import ProfessionForm from '@/components/forms/register/ProfessionForm';
import SpiritualForm from '@/components/forms/register/SpiritualForm';
import AcademicForm from '@/components/forms/register/AcademicForm';
import FamilyForm from '@/components/forms/register/FamilyForm';
import Register from '@/pages/Register';

export default {
  path: '/register',
  component: Register,
  children: [
    {
      path: 'personal',
      name: 'personal',
      component: PersonalForm,
    }, {
      path: 'contact',
      name: 'contact',
      component: ContactForm,
    }, {
      path: 'location',
      name: 'location',
      component: LocationForm,
    }, {
      path: 'profession',
      name: 'profession',
      component: ProfessionForm,
    }, {
      path: 'spiritual',
      name: 'spiritual',
      component: SpiritualForm,
    }, {
      path: 'academic',
      name: 'academic',
      component: AcademicForm,
    }, {
      path: 'family',
      name: 'family',
      component: FamilyForm,
    },
  ],
  meta: {
    requiresAuth: true,
  },
};
