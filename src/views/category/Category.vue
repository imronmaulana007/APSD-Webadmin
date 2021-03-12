<template>
<section id="card-navigation">
    <!-- <h5 class="mt-3 mb-2">
      Category Page
    </h5> -->

    <div class="vx-row match-height">
        <div class="vx-col w-full md:w-full">
            <vx-card title="Category Page">
                <!-- SLOT = ACTION -->
                    <template slot="actions">
                        <div class="btn-group">
                            <vs-button size="small" @click="addNewData"  title="Add data">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                                Add Data
                            </vs-button>
                            <vs-button size="small" color="success"  @click="activePrompt=true"  title="Export"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                                Export
                            </vs-button>
                        </div>
                    </template>
                 <div class="export-table">
                    <vs-table :data="datas" search pagination max-items="5">
                        <template slot="thead">
                        <vs-th sort-key="id"> Nro     </vs-th>
                        <vs-th sort-key=""> #     </vs-th>
                        <vs-th sort-key="category_name"> Category Name   </vs-th>
                        <vs-th sort-key="status"> Status    </vs-th>
                        </template>

                        <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="tr.id" v-for="(tr, indextr) in data">
                            <vs-td>{{ data[indextr].id      }}</vs-td>
                            <vs-td>
                                <div class="btn-group">
                                    <vs-button size="small" color="danger" title="Delete" @click="openConfirm(data[indextr].id)" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </vs-button>
                                    <vs-button size="small" color="primary" title="Edit"  @click.stop="editData(tr)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                        </svg>
                                    </vs-button>
                                    <vs-button size="small" color="primary" title="Detail" @click.stop="detailsData(tr)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
                                        </svg>
                                    </vs-button>
                                </div>
                            </vs-td>
                            <vs-td>{{ data[indextr].category_name   }}</vs-td>
                            <vs-td><vs-chip :color="data[indextr].status == 1 ? 'primary' : 'danger'">{{ data[indextr].status == 1 ? "Aktif" : "Tidak Aktif" }}</vs-chip></vs-td>
                        </vs-tr>
                        </template>

                    </vs-table>
                    </div>
            </vx-card>
        </div>
    </div>

    <vs-popup class="holamundo" :title="titlepopup" :active.sync="popupActiveAdd">
        <Add :data="formData" :detail="detailData" @update="updateDatas"/>
    </vs-popup>
    
   <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
        <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
        <v-select v-model="selectedFormat" :options="formats" class="my-4" />
        <div class="flex">
          <span class="mr-4">Cell Auto Width:</span>
          <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
        </div>
    </vs-prompt>
  </section>
</template>

<script>
import vSelect from 'vue-select'
import Add from './Add.vue'

export default {
  components: {
    vSelect,
    Add
  },
  data() {
    return {
        popupActiveAdd: false,
        // popupActiveEdit: false,
        // popupActiveDetail: false,
        activeConfirm: false,

      addNewDataSidebar: false,
      formData: {},
      detailData: false,
      titlepopup:'',

      fileName: "",
      formats:["xlsx", "csv", "txt"] ,
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["Id", "Category Name","Status"],
      headerVal: ["id", "category_name","status"],
      datas: [],
      activePrompt: false,
    }
  },
  methods: {
    getCategory() {
      this.$store.dispatch("CATEGORY").then(data => {
        this.datas = data;
      });
    },

    async DeleteData(id,notif) {
        this.$store.dispatch("DELETE_CATEGORY", id).then(data => {
            this.datas = data;
            this.$vs.loading.close();
            this.$vs.notify({
                title: "Success",
                text: notif,
                color: "success",
                iconPack: "feather",
                icon: "icon-check"
            });

            this.getCategory();
            // this.acceptAlert();
      });
    },

    initValues() {
      if(this.data.id) return
        this.dataId = null
        this.category_name = ""
        this.status = true
    },

    updateDatas (v) {
      this.titlepopup = v.titlepopup;
      this.popupActiveAdd = v.popupdisplay;
    },

    addNewData() {
      this.formData = ""
      this.popupActiveAdd =true;
      this.detailData = false;
      this.initValues();

      // this.toggleDataSidebar(true)
    },

    editData(data) {
        // this.formData = JSON.parse(JSON.stringify(this.blankData))
      this.formData = data
      this.popupActiveAdd =true;
      this.detailData = false;
        // this.toggleDataSidebar(true)
    },

    detailsData(data) {
      // this.formData = JSON.parse(JSON.stringify(this.blankData))
      this.detailData = true;
      this.formData = data
      this.popupActiveAdd =true;
      // this.toggleDataSidebar(true)
    },

    openConfirm(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Are you sure to delete this row?',
        accept: this.DeleteData(id)
      })
    },
    acceptAlert() {
      this.$vs.notify({
        color: 'danger',
        title: 'Deleted image',
        text: 'Data has been delete!'
      })
    },

    exportToExcel() {
      import('@/vendor/Export2Excel').then(excel => {
        const list = this.datas
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat
        })
        this.clearFields()
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // Add col name which needs to be translated
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        //   return v[j]
        // }

        return v[j]
      }))
    },
    clearFields() {
      this.filename = "",
      this.cellAutoWidth = true,
      this.selectedFormat = "xlsx"
    }
  },
  created() {
    this.getCategory();

  },
}
</script>