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
                <label class="label">Subscriptions Per Employee</label>
                <div class="control">
                    <input type="text" v-model="editCompanyForm.subsPerEmployee">
                </div>
            </div>

            <p>
            <button v-on:click.once="updateCompany">Update</button></p>
        </form>
    </div>
</template>

<script>
import CompanyService from "../../services/CompanyService";

export default {
    name: 'CompanyEdit',
    data() {
        return {
            companyId: "",
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
            CompanyService.getById(companyId)
            .then(results => {
                //  JSON responses automatically parsed
                this.editCompanyForm = results;
                console.log('Editing company');
                console.dir(this.editCompanyForm);
            })
            .catch(e => {
                this.errors.push(e)
            })

    },
    methods: {
        updateCompany() {
            alert("Updating Company Info For: " + editCompanyForm.companyName);
        }
    }
   
}
</script>

<style>

</style>
