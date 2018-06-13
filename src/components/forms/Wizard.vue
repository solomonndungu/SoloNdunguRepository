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
              <div class="step-content scrollable">
                <biodata-information-form></biodata-information-form>
              </div>

              <h1>Contact Infromation</h1>
              <div class="step-content scrollable">
                <contact-information-form></contact-information-form>
              </div>

              <h1>Residency &amp; Nationality</h1>
              <div class="step-content scrollable">
                <location-information-form></location-information-form>
              </div>

              <h1>Spiritual Infromation</h1>
              <div class="step-content scrollable">
                <spiritual-information-form></spiritual-information-form>
              </div>

              <h1>Professional Details</h1>
              <div class="step-content scrollable">
                <biodata-form></biodata-form>
              </div>

              <h1>Academic Details</h1>
              <div class="step-content scrollable">
                <biodata-form></biodata-form>
              </div>

              <h1>Family Relationships</h1>
              <div class="step-content scrollable">
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
import BioDataInformation from './profile/BioDataInformation';
import ContactInformation from './profile/ContactInformation';
import LocationInformation from './profile/LocationInformation';
import ProfessionInformation from './profile/ProfessionInformation';
import SpiritualInformation from './profile/SpiritualInformation';

export default {
  name: 'Wizard',
  components: {
    'biodata-information-form': BioDataInformation,
    'contact-information-form': ContactInformation,
    'location-information-form': LocationInformation,
    'profession-information-form': ProfessionInformation,
    'spiritual-information-form' : SpiritualInformation,
  },
};
</script>

<style>
.scrollable {
    height: 100px; /* or any value */
    overflow-y: auto;
}
</style>
