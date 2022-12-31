import './Staffing.css'

export const Staffing = () => {
  return  (   
  <><div class="container1">
      <div class="header">
        <h3>Staff Details  </h3>
      </div>
    </div>
    <div class="container2">
      <div class="row">
      <div class="col-25">
      <label for="fname">Name :</label>
    </div>                      
    <div class="col-75">
      <input type="text" id="subject" name="subject" placeholder="ENTER NAME" />
    </div>
    </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Designation :</label>
    </div>
    <div class="col-75">
      <input type="text" id="subject" name="subject" placeholder="ENTER DESIGNATION " />
    </div>
      </div>
    
    </div> <br/>

    <div class="container3">
      <div class="header4">
        <h3>Attendance  </h3>
      </div>
    </div> 
    <div class="container4">
      <div class="row">
      <div class="col-25">
      <label for="fname">Attendance Details (Months) :</label>
    </div>
    <div class="col-75">
      <input type="text" id="subject" name="subject" placeholder="Enter the Attendance (Months)" />
    </div>
    </div>
    </div> <br/>
    
    <div class="container5">
      <div class="header5">
        <h3>Diary   </h3>
      </div>
    </div> 
    <div class="container6">
      <div class="row">
      <div class="col-25">
      <label for="fname">Please Enter the Daily Report :</label>
    </div>
    <div class="col-75">
      <textarea type="text" id="subject" name="subejct" placeholder="Enter Your Daily Report Here..." />
    </div>
    </div>
    </div> <br/>

    <div class="container7">
      <div class="header6">
        <h3>Reports   </h3>
      </div>
    </div> 
    <div class="container8">
      <div class="row">
           <div class="col-25">
      <label for="fname">Enter Your Weekly Report :</label>
    </div>
    <div class="col-75">
      <textarea type="text" id="subject" name="subject" placeholder="Enter Your Weekly Report Here..." />
          </div>
                </div>
      <div class="row">
           <div class="col-25">
      <label for="fname">Enter Your Monthly Report :</label>
    </div>
    <div class="col-75">
      <textarea type="text" id="subject" name="subject" placeholder="Enter Your Monthly Report Here..." />
    </div>
    </div>
    </div> <br/>
                
    
    </>
  )
  }