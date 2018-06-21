<template>
    <div class="wizard-inner">
      <div class="connecting-line"></div>
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#step1" data-toggle="tab" aria-controls="step1"
          role="tab" title="Personal">
            <span class="round-tab">
              <i class="glyphicon glyphicon-user"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#step2" data-toggle="tab" aria-controls="step2"
          role="tab" title="Membership">
            <span class="round-tab">
              <i class="fa fa-handshake"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#step3" data-toggle="tab" aria-controls="step3"
          role="tab" title="Contact">
            <span class="round-tab">
              <i class="glyphicon glyphicon-phone"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#step4" data-toggle="tab" aria-controls="step4"
          role="tab" title="Location">
            <span class="round-tab">
              <i class="glyphicon glyphicon-globe"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#step5" data-toggle="tab" aria-controls="step5"
          role="tab" title="Profession">
            <span class="round-tab">
              <i class="glyphicon glyphicon-briefcase"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#step6" data-toggle="tab" aria-controls="step6"
          role="tab" title="Spiritual">
            <span class="round-tab">
              <i class="fa fa-eye"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#step7" data-toggle="tab" aria-controls="step7"
          role="tab" title="Academic">
            <span class="round-tab">
              <i class="glyphicon glyphicon-book"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#step8" data-toggle="tab" aria-controls="step8"
          role="tab" title="Family">
            <span class="round-tab">
              <i class="fa fa-group"></i>
            </span>
          </a>
        </li>
        <li role="presentation" class="disabled">
          <a href="#complete" data-toggle="tab" aria-controls="complete"
          role="tab" title="Complete">
            <span class="round-tab">
              <i class="glyphicon glyphicon-ok"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'WizardNav',
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
