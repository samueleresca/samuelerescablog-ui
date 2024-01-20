import GhostAdminApi from '@tryghost/admin-api';

async function main() {
    try {
        const api = new GhostAdminApi({
            url: process.env.url,
            key: process.env.key,
            version: 'canary'
        });

        console.log("Branch name"+ process.env.branch);
        // Deploy it to the configured site
        //await api.themes.upload({ file: 'samueleresca-ui.zip' });
        //console.log('Theme successfully uploaded.');
    } catch (err) {
        console.error(err);
        console.error(err.errors.map(x => x.message));
        process.exit(1);
    }
}

// Execute the main function when the module is run
if (require.main === module) {
    main();
}
