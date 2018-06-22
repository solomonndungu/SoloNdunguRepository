<template>
<div class="wrapper wrapper-content animated fadeInRight">
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-title">
          <h2>PERSONAL INFORMATION</h2>
        </div>
        <div class="ibox-content">
          <div class="wizard">
            <wizard-nav></wizard-nav>
            <form role="form" @submit.prevent="sumbitMethod">
              <div class="tab-content">
                <div class="tab-pane active" role="tabpanel" id="step1">
                  <personal-form :personal="user.personal"></personal-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step2">
                  <contact-form :contact="user.contact"></contact-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step3">
                  <location-form></location-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step4">
                  <profession-form :profession="user.profession"></profession-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step5">
                  <spiritual-form :spiritual="user.spiritual"></spiritual-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step6">
                  <academic-form :academic="user.academic"></academic-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step7">
                  <family-form :family="user.family"></family-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="complete">
                </div>
                <wizard-footer :user='user'></wizard-footer>
                <div class="clearfix"></div>
                {{ user.personal }}
                {{ user.contact }}
                {{ user.family }}
                {{ user.academic }}
                {{ user.spiritual }}
                {{ user.profession }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PersonalForm from './register/PersonalForm';
import ContactForm from './register/ContactForm';
import LocationForm from './register/LocationForm';
import ProfessionForm from './register/ProfessionForm';
import SpiritualForm from './register/SpiritualForm';
import AcademicForm from './register/AcademicForm';
import FamilyForm from './register/FamilyForm';
import WizardNav from './register/WizardNav';
import WizardFooter from './register/WizardFooter';

export default {
  name: 'Wizard',
  components: {
    'personal-form': PersonalForm,
    'contact-form': ContactForm,
    'location-form': LocationForm,
    'profession-form': ProfessionForm,
    'spiritual-form': SpiritualForm,
    'academic-form': AcademicForm,
    'family-form': FamilyForm,
    'wizard-nav': WizardNav,
    'wizard-footer': WizardFooter,

  },
  data() {
    return {
      user: {
        contact: {},
        personal: {},
        family: {},
        academic: {},
        spiritual: {},
        profession: {},
      },
    };
  },
};
</script>

<style>
</style>
