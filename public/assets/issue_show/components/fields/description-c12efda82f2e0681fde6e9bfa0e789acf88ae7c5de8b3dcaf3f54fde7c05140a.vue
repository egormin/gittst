<script>
  /* global Flash */
  import updateMixin from '../../mixins/update';
  import markdownField from '../../../vue_shared/components/markdown/field.vue';

  export default {
    mixins: [updateMixin],
    props: {
      formState: {
        type: Object,
        required: true,
      },
      markdownPreviewUrl: {
        type: String,
        required: true,
      },
      markdownDocs: {
        type: String,
        required: true,
      },
    },
    components: {
      markdownField,
    },
    mounted() {
      this.$refs.textarea.focus();
    },
  };
</script>

<template>
  <div class="common-note-form">
    <label
      class="sr-only"
      for="issue-description">
      Description
    </label>
    <markdown-field
      :markdown-preview-url="markdownPreviewUrl"
      :markdown-docs="markdownDocs">
      <textarea
        id="issue-description"
        class="note-textarea js-gfm-input js-autosize markdown-area"
        data-supports-slash-commands="false"
        aria-label="Description"
        v-model="formState.description"
        ref="textarea"
        slot="textarea"
        placeholder="Write a comment or drag your files here..."
        @keydown.meta.enter="updateIssuable"
        @keydown.ctrl.enter="updateIssuable">
      </textarea>
    </markdown-field>
  </div>
</template>
