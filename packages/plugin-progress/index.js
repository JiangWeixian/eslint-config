import { createProgressReporter } from './create-progress-reporter.js'

const progress = createProgressReporter({ hookExit: true })
export default progress.eslintPlugin
