<template>
    <div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Category Name</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="category_name" class="mt-5 w-full" name="Customer" v-if="detail != true" />
                <vs-input size="large" v-model="category_name" class="mt-5 w-full" disabled name="Customer" v-else/>
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
    vSelect
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
        category_name:'',
        status:true,

        datas:[],

        popupdisplay:''
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
            let { id, category_name, status } = JSON.parse(JSON.stringify(this.data))
            this.dataId = id
            this.category_name = category_name
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
        this.category_name = ""
        this.status = true
    },

    getCategory() {
      this.$store.dispatch("CATEGORY").then(data => {
        this.datas = data;
        this.onChange(this.datas);
      });
    },

    submitData() {
        const obj = {
            id: this.dataId,
            category_name: this.category_name,
            status: this.status,
        }

        if(this.dataId !== null && this.dataId >= 0) {
            // this.$store.dispatch("dataList/updateItem", obj).catch(err => { console.error(err) })
            this.$vs.loading();
            this.$store
            .dispatch("UPDATE_CATEGORY", obj)
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
            this.getCategory();
            this.onChange(this.popupdisplay = false);
            });
        }else{
        //   delete obj.id
        //   obj.popularity = 0
            // this.$store.dispatch("dataList/addItem", obj).catch(err => { console.error(err) })
            this.$vs.loading();

            this.$store
            .dispatch("INSERT_CATEGORY", obj)
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
            this.getCategory();
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