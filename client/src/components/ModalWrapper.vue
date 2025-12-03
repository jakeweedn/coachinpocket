<script setup>

defineProps({
    modalId: { type: String, required: true },
    modalTitle: { type: String, default: "Don't forget your title!!" }


})

</script>


<template>
    <div class="modal fade" :id="modalId" tabIndex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <slot>

                </slot>

            </div>


        </div>


    </div>

</template>


<style lang="scss" scoped></style>