export default {
  item: {
    metric: {
      status: {
        no: 'item.metric.status.no',
        yes: 'item.metric.status.yes',
        noApply: 'item.metric.status.noApply'
      }
    },
    success: {
      edit: 'item.success.edit',
      delete: 'item.success.delete',
      create: 'item.success.create',
      list: 'item.success.list',
      createMetrics: 'item.success.createMetrics',
      deleteMetric: 'item.success.deleteMetric'
    },
    errors: {
      nameRequired: 'item.error.nameRequired',
      nameAlreadyExists: 'item.error.nameAlreadyExists',
      createMetrics: 'item.error.duplicatedMetrics'
    }
  },
  user: {
    success: {
      edit: 'user.success.edit',
      delete: 'user.success.delete',
      create: 'user.success.create',
      list: 'user.success.list',
      resetPassword: 'user.success.resetPassword'
    },
    errors: {
      userExist: 'user.errors.userExist',
      emailInvalid: 'user.errors.emailInvalid',
      passwordInvalid: 'user.errors.passwordInvalid',
      nameInvalid: 'user.errors.nameInvalid',
      existsOnlyOneAdminUser: 'user.errors.existsOnlyOneAdminUser',
      userNameExist: 'user.errors.userNameExist',
      userPhoneExist: 'user.errors.userPhoneExist',
      userEmailExist: 'user.errors.userEmailExist',
      userConfirmPasswordInvalid: 'user.errors.userConfirmPassworInvalid',
      userNewPasswordIvalid: 'user.errors.userNewPasswordInvalid'
    }
  },
  device: {
    success: {
      edit: 'device.success.edit',
      delete: 'device.success.delete',
      create: 'device.success.create',
      list: 'device.success.list'
    },
    errors: {
      nameInvalid: 'device.errors.nameInvalid',
      deviceNameExist: 'device.errors.deviceNameExist'
    }
  },
  mapNavigation: {
    success: {
      edit: 'mapNavigation.success.edit',
      delete: 'mapNavigation.success.delete',
      create: 'mapNavigation.success.create',
      list: 'mapNavigation.success.list'
    },
    errors: {
      invalidScreen: 'mapNavigation.error.screen.invalidScreen',
      invalidParent: 'mapNavigation.error.screen.invalidParent'
    }
  },
  report: {
    success: {
      edit: 'report.success.edit',
      delete: 'report.success.delete',
      create: 'report.success.create',
      list: 'report.success.list'
    },
    errors: {
      invalidScreen: 'report.error.screen.invalidScreen',
      invalidParent: 'report.error.screen.invalidParent'
    }
  },
  auth: {
    token: {
      noProvided: 'auth.token.noProvided',
      tokenError: 'auth.token.tokenError',
      malformatted: 'auth.token.malformatted',
      invalid: 'auth.token.invalid'
    }
  }
}
