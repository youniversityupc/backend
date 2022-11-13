module.exports = ({ env }) => ({
  'config-sync': {
    enabled: true,
    config: {
      excludedConfig: [
        "core-store.plugin_users-permissions_grant",
        "core-store.core_admin_project-settings",
        "core-store.plugin_upload_metrics",
      ],
    },
  },
});
