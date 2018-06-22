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
            <form role="form">
              <div class="tab-content">
                <div class="tab-pane active" role="tabpanel" id="step1">
                  <personal-form></personal-form>
                </div>
                <div class="tab-pane active" role="tabpanel" id="step2" >
                  <membership-form></membership-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step3" >
                  <contact-form></contact-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step4" >
                  <location-form></location-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step5" >
                  <profession-form></profession-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step6" >
                  <spiritual-form></spiritual-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step7" >
                  <academic-form></academic-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="step8">
                  <family-form></family-form>
                </div>
                <div class="tab-pane" role="tabpanel" id="complete">

                </div>
                <wizard-footer></wizard-footer>
                <button @click.prevent="next()"> next</button>
                <div class="clearfix"></div>
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
import Membership from './register/Membership';

export default {
  name: 'Wizard',
  data() {
    return {
      step: 1,
    };
  },
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
    'membership-form': Membership,
  },
  methods: {
    next() {
      console.log('moving on')
    },
  },
  updated: function (){
    console.log('updating wizard info');
  },
};
</script>

<style>
</style>
