<script>
    import { enhance } from '$app/forms';
    import ComboBox from "./ComboBox.svelte"
    import Context from "./Context.svelte"

    export let film;
    export let data
    let edit = false
    let details = false

    function Details() {
        if(details) details = false
        else details = true
    }
    function Edit() {
        if(edit) edit = false
        else edit = true
    }


</script>

<div class="article-preview" style= "margin: 0 auto; padding: 20px; width: 700px; text-align: center">
    <button class="btn btn-outline" on:click={Details}>
        <i class="icon ion-ios-eye"></i> &nbsp; Infos

    </button>
    {#if details}

        <div class="modal-content">
            <h5>Infos tournage </h5>
            <table class="table table-striped">
                <tr>
                    <td>Nom</td>
                    <td>{film.filmName}</td>
                </tr>
                <tr>
                    <td>Genre</td>
                    <td>{film.filmType}</td>
                </tr>
                <tr>
                    <td>Producteur</td>
                    <td>{film.filmProducerName}</td>
                </tr>
                <tr>
                    <td>Directeur</td>
                    <td>{film.filmDirectorName}</td>
                </tr>
                <tr>
                    <td>Adresse</td>
                    <td>{film.address}</td>
                </tr>
                <tr>
                    <td>Code Postal</td>
                    <td>{film.district}</td>
                </tr>
                <tr>
                    <td>Géolocalisation</td>
                    <td>{film.geolocation.coordinates} {film.geolocation.type}</td>
                </tr>
                <tr>
                    <td>Début du tournage</td>
                    <td>{film.startDate}</td>
                </tr>
                <tr>
                    <td>Date fin du tournage</td>
                    <td>{film.endDate}</td>
                </tr>
                <tr>
                    <td>Année</td>
                    <td>{film.year}</td>
                </tr>
                <tr>
                    <td>SourceLocationId </td>
                    <td>{film.sourceLocationId}</td>
                </tr>
                <tr>
                    <td>Film id </td>
                    <td>{film._id}</td>
                </tr>
            </table>

        </div>



    {/if}


    {#if data.user.role === 'admin'}
        <button on:click={Edit} class="btn btn-outline">
            <i class="icon ion-edit"></i> &nbsp; Edit
        </button>
    {/if}
    {#if edit}
        <form use:enhance method="POST" action="?/editLocation&id={film._id}">
            <div class="modal-content">
                <h5>Modifications infos tournage </h5>
                <table class="table table-striped">
                    <tr>
                        <td>Nom</td>
                        <td><textarea  name="filmName" placeholder="filmName" rows="1" >{film.filmName}</textarea></td>
                    </tr>
                    <tr>
                        <td>Genre</td>

                        <td><ComboBox
                                placeholder={film.filmType}
                                options={[
    	{ text: "Long métrage", value: "Long métrage" },
    	{ text: "Série TV", value: "Série TV" },
			{ text: "Série Web", value: "Série Web" },
			{ text: "Téléfilm", value: "Téléfilm" },

  	]}
                        /></td>
                    </tr>
                    <tr>
                        <td>Producteur</td>
                        <td><textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >{film.filmProducerName}</textarea></td>
                    </tr>
                    <tr>
                        <td>Directeur</td>
                        <td><textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >{film.filmDirectorName}</textarea></td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td><textarea  name="address" placeholder="address" rows="1" >{film.address}</textarea></td>
                    </tr>
                    <tr>
                        <td>Code Postal</td>
                        <td><textarea  name="district" placeholder="district" rows="1" >{film.district}</textarea></td>
                    </tr>
                    <tr>
                        <td>Géolocalisation</td>
                        <td>
                            <textarea  name="lattitute" placeholder="lattitude" rows="1" >{film.geolocation.coordinates[0]}</textarea>
                            <textarea  name="longitude" placeholder="longitude" rows="1" >{film.geolocation.coordinates[1]}</textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Début du tournage</td>
                        <td><textarea  name="startDate" placeholder="startDate" rows="1" >{film.startDate}</textarea></td>
                    </tr>
                    <tr>
                        <td>Date fin du tournage</td>
                        <td><textarea  name="endDate" placeholder="endDate" rows="1" >{film.endDate}</textarea></td>
                    </tr>
                    <tr>
                        <td>Année</td>
                        <td><textarea  name="year" placeholder="year" rows="1" >{film.year}</textarea></td>
                    </tr>
                    <tr>
                        <td>SourceLocationId </td>
                        <td><textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >{film.sourceLocationId}</textarea></td>
                    </tr>

                </table>
                <div class="card-footer">
                    <button class="btn btn-sm btn-primary" type="submit"> Save &nbsp;&nbsp;<i class="icon ion-android-send"></i> </button>
                </div>

            </div>
        </form>



    {/if}
</div>

<style>
    @media (max-width: 768px) {
        .modal-content {
            font-size: 0.8rem;
            padding: 1rem;
        }
    }
    textarea {
        margin: 0;
        width: 50%;
        padding: 0.2rem 1rem;
        border: 0.175rem solid antiquewhite;
        border-radius: 0.3rem;
    }
</style>



