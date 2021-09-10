<template>
    <div>
        <h1>Edit Company</h1>

        <form>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input type="text" v-model="editCompanyForm.companyName">
                </div>
            </div>
            <div class="field">
                <label class="label">Domain</label>
                <div class="control">
                    <input type="text" v-model="editCompanyForm.domain">
                </div>
            </div>
            <div class="field">
                <label class="label">Number Of Employees</label>
                <div class="control">
                    <input type="text" v-model="editCompanyForm.numbOfEmployees">
                </div>
            </div>
            <div class="field">
                <label class="label">subsPerEmployee</label>
                <div class="control">
                    <input type="text" v-model="editCompanyForm.subsPerEmployee">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import CompanyService from "../../services/CompanyService";

export default {
    name: 'CompanyEdit',
    data() {
        return {
            company: {
                id: "",
                name: "",
                domain: "",
                numberOfEmployees: "",
                subscriptionsPerEmployee: ""
            },
            editCompanyForm: {
                id: "",
                companyName: "",
                domain: "",
                numOfEmployees: "",
                subsPerEmployee: ""
            }
        };
    },
    created: function() {
            // fetches all companies when component is created
            CompanyService.getById(company.id)
            .then(results => {
                //  JSON responses automatically parsed
                this.editCompanyForm = results.data;
                console.log('Getting company');
                console.dir(this.editCompanyForm);
            })
            .catch(e => {
                this.errors.push(e)
            })

    },
   
}
</script>

<style>

</style>
