<template>
    <div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Customer Name</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="customer_name" class="mt-5 w-full" name="Customer" v-if="detail != true" />
                <vs-input size="large" v-model="customer_name" class="mt-5 w-full" disabled name="Customer" v-else/>
            </div>
        </div>
        
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Gender</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <!-- <vs-input size="large" v-model="gender" class="mt-5 w-full" name="Customer" v-if="detail != true" />
                <vs-input size="large" v-model="gender" class="mt-5 w-full" disabled name="Customer" v-else/> -->

                <v-select label="gender" v-model="gender" :options="genderOptions" v-if="detail != true"></v-select>
                <v-select label="gender" v-model="gender" :options="genderOptions" v-else></v-select>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Phone Number</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="phone_number" class="mt-5 w-full" name="Customer" v-if="detail != true" />
                <vs-input size="large" v-model="phone_number" class="mt-5 w-full" disabled name="Customer" v-else/>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Address</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="address" class="mt-5 w-full" name="Customer" v-if="detail != true" />
                <vs-input size="large" v-model="address" class="mt-5 w-full" disabled name="Customer" v-else/>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Email</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="email" class="mt-5 w-full" name="Customer" v-if="detail != true" />
                <vs-input size="large" v-model="email" class="mt-5 w-full" disabled name="Customer" v-else/>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Password</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" type="password" v-model="password" class="mt-5 w-full" name="Customer" v-if="detail != true" />
                <vs-input size="large" type="password" v-model="password" class="mt-5 w-full" disabled name="Customer" v-else/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Status</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-switch v-model="status" v-if="detail != true" >
                    <span slot="on">On</span>
                    <span slot="off">Off</span>
                </vs-switch>

                <vs-switch v-model="status" disabled v-else>
                    <span slot="on">On</span>
                    <span slot="off">Off</span>
                </vs-switch>
            </div>
        </div>
            
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button class="mr-3 mb-2" @click="submitData">Submit</vs-button>
                <!-- <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button> -->
            </div>
        </div>
    </div>
</template>


<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
     'v-select': vSelect,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    detail: {
      type: Boolean,
      default: () => {},
    }
  },
  data() {
    return {
        dataId: null,

        id_role:'',
        customer_name:'',
        gender:'',
        phone_number:'',
        address:'',
        email:'',
        password:'',
        status:true,

        datas:[],

        popupdisplay:'',

        genderOptions: [
            {
                id_gender: "1",
                gender: "Male",
            },
            {
                id_gender: "2",
                gender: "Female",
            },
        ]
    }
  },
  watch: {
      data(val){
        // if(!val) return
        if(Object.entries(this.data).length === 0) {
            this.initValues()
            this.$validator.reset()
            this.onChange("Tambah Data");
        }else {
            let { id, customer_name, gender, phone_number, address, email, password, status } = JSON.parse(JSON.stringify(this.data))
            this.dataId = id
            this.customer_name = customer_name
            this.gender = gender
            this.phone_number = phone_number
            this.address = address
            this.email = email
            this.password = password
            this.status = status
            this.initValues();
            this.onChange("Ubah Data");
        }
      },
        
  },
  computed: {
   
  },
  methods: {
    onChange (e) {
      this.$emit('update', e);
    },

    initValues() {
      if(this.data.id) return
        this.dataId = null
        this.customer_name = ""
        this.gender = ""
        this.phone_number = ""
        this.address = ""
        this.email = ""
        this.password = ""
        this.status = true
    },

    getCustomer() {
      this.$store.dispatch("CUSTOMER").then(data => {
        this.datas = data;
        this.onChange(this.datas);
      });
    },

    submitData() {
        const obj = {
            id: this.dataId,
            customer_name : this.customer_name,
            gender : this.gender.id_gender == undefined ? this.gender : this.gender.id_gender,
            phone_number : this.phone_number,
            address : this.address,
            email : this.email,
            password : this.password,
            status : this.status,
        }

        if(this.dataId !== null && this.dataId >= 0) {
            // this.$store.dispatch("dataList/updateItem", obj).catch(err => { console.error(err) })
            this.$vs.loading();
            this.$store
            .dispatch("UPDATE_CUSTOMER", obj)
            .then(() => {
                this.$vs.loading.close();
                this.initValues();

                this.$vs.notify({
                title: "Success",
                text: "Success, data added",
                color: "success",
                iconPack: "feather",
                icon: "icon-check"
                });
            this.getCustomer();
            this.onChange(this.popupdisplay = false);
            });
        }else{
        //   delete obj.id
        //   obj.popularity = 0
            // this.$store.dispatch("dataList/addItem", obj).catch(err => { console.error(err) })
            this.$vs.loading();

            this.$store
            .dispatch("INSERT_CUSTOMER", obj)
            .then(() => {
                this.$vs.loading.close();
                this.initValues();

                this.$vs.notify({
                title: "Success",
                text: "Success, data added",
                color: "success",
                iconPack: "feather",
                icon: "icon-check"
                });
            this.getCustomer();
            this.onChange(this.popupdisplay = false);
            });
        }

        this.$emit('closeSidebar')
        this.initValues()
    },
  },
  mounted() {
    // console.log(this.data);
  },
  updated(){
    // console.log(this.data);
  }
}
</script>