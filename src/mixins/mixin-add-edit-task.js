import ModalHeader from 'src/components/Modals/Shared/ModalHeader'
import ModalTaskName from 'src/components/Modals/Shared/ModalTaskName'
import ModalDueDate from 'src/components/Modals/Shared/ModalDueDate'
import ModalDueTime from 'src/components/Modals/Shared/ModalDueTime'
import ModalButtons from 'src/components/Modals/Shared/ModalButtons'
export default {
  methods: {
    onSubmit() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
  },
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons,
  }
}