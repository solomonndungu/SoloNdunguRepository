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
            <div id="wizard">
              <h1>First Step</h1>
              <div class="step-content">
                <div class="text-center m-t-md">
                  <h2>Hello in Step 1</h2>
                  <p>
                    This is the first content.
                  </p>
                </div>
              </div>

              <h1>Second Step</h1>
              <div class="step-content">
                <div class="text-center m-t-md">
                  <h2>This is step 2</h2>
                  <p>
                    This content is diferent than the first one.
                  </p>
                </div>
              </div>

              <h1>Third Step</h1>
              <div class="step-content">
                <div class="text-center m-t-md">
                  <h2>This is step 3</h2>
                  <p>
                    This is last content.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Wizard',
};
</script>

<style>

</style>
