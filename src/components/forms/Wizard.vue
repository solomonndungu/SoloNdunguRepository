<template>
  <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h2>PERSONAL INFORMATION</h2>
          </div>
          <div class="ibox-content">
            <p>
              Please in your details
            </p>
            <div id="wizard" class="wizard-big">
              <h1 class="hidden-sm">BioData</h1>
              <div class="step-content">
                <biodata-form></biodata-form>
              </div>

              <h1>Contact Infromation</h1>
              <div class="step-content">
                <contact-infomation-form></contact-infomation-form>
              </div>

              <h1>Residency &amp; Nationality</h1>
              <div class="step-content">
                <biodata-form></biodata-form>
              </div>

              <h1>Spiritual Infromation</h1>
              <div class="step-content">
                <biodata-form></biodata-form>
              </div>

              <h1>Professional Details</h1>
              <div class="step-content">
                <biodata-form></biodata-form>
              </div>

              <h1>Academic Details</h1>
              <div class="step-content">
                <biodata-form></biodata-form>
              </div>

              <h1>Family Relationships</h1>
              <div class="step-content">
                <biodata-form></biodata-form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BioDataForm from './profile/BioData';
import ContactInformation from './profile/ContactInformation';

export default {
  name: 'Wizard',
  components: {
    'biodata-form': BioDataForm,
    'contact-infomation-form': ContactInformation,

  },
};
</script>

<style>

</style>
