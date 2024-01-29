import moment from 'moment/moment';

const FILENAME = 'managers/LogManager.js';
const Config = Object.freeze({
    logging: Object.freeze({
        logToConsole: false
    }),
    timeFormat: Object.freeze({
        pretty: 'YYYY-MM-DD HH:mm:ss:SSS',
        gmt: 'YYYY-MM-DDTHH:mm:ssZ:SSS'
    })
});

/**
 * About:
 * LogManager
 * 
 * Description:
 * Manages all Debug-, Information-, Warning-, Error- and Fatal log messages. 
 * Can handle both simple string messages and complex JSON objects.
 * 
 * Note:
 * To avoid circular dependencies, the LogManager cannot fetch settings from the ConfigManager.
 * Unfortunately this also means that this local Config-object cannot be changed by the user.
 */
class LogManager {
    static #log = [];
    static #levels = Object.freeze({
        debug: {
            value: 1,
            icon: '🐳',
            name: 'Debug',
            color: '#00385B',
            backgroundColor: '#F0F6FF',
            method: window.console.debug
        },
        information: {
            value: 2,
            icon: '🦝',
            name: 'Information',
            color: '#1A1E24',
            backgroundColor: '#F3F4F5',
            method: window.console.info
        },
        warning: {
            value: 3,
            icon: '🐱',
            name: 'Warning',
            color: '#493B10',
            backgroundColor: '#FFF8E1',
            method: window.console.warn
        },
        error: {
            value: 4,
            icon: '🐞',
            name: 'Error',
            color: '#8D2120',
            backgroundColor: '#FFE6E6',
            method: window.console.error
        },
        fatal: {
            value: 5,
            icon: '👾',
            name: 'Fatal',
            color: '#212529',
            backgroundColor: '#E8E6FF',
            method: window.console.error
        }
    });

    static async initAsync(options = {}) {
        LogManager.logDebug(FILENAME, 'initAsync', 'Initialization started');

        return new Promise((resolve) => {
            resolve({
                filename: FILENAME,
                result: true
            });
        });
    }

    static setMap(map) { }

    static getName() {
        return FILENAME;
    }

    // -------------------------------------------------------------------
    // # Section: Internal
    // -------------------------------------------------------------------

    static #logToConsole(level, origin, method, value, formattedTimestamp) {
        level.method(origin, method, value, formattedTimestamp);
    }

    static #logSink(level, origin, method, value) {
        const timeFormat = Config.timeFormat.pretty;
        const logToConsole = Config.logging.logToConsole;

        const timestamp = moment();
        const formattedTimestamp = timestamp.format(timeFormat);

        const entry = {
            timestamp: formattedTimestamp,
            level: level,
            origin: origin,
            method: method,
            value: value
        };

        this.#log.push(entry);

        if(logToConsole) {
            this.#logToConsole(level, origin, method, value, formattedTimestamp);
        }

        return entry;
    }

    // -------------------------------------------------------------------
    // # Section: Public API
    // -------------------------------------------------------------------

    static getSize() {
        return this.#log.length || 0;
    }

    static getLog() {
        return this.#log;
    }

    static clearLog() {
        this.#log = [];
    }

    static getLogLevels() {
        return this.#levels;
    }

    static logDebug(origin, method, value) {
        return this.#logSink(this.#levels.debug, origin, method, value);
    }

    static logInformation(origin, method, value) {
        return this.#logSink(this.#levels.information, origin, method, value);
    }

    static logWarning(origin, method, value) {
        return this.#logSink(this.#levels.warning, origin, method, value);
    }

    static logError(origin, method, value) {
        return this.#logSink(this.#levels.error, origin, method, value);
    }

    static logFatal(origin, method, value) {
        return this.#logSink(this.#levels.fatal, origin, method, value);
    }
}

export { LogManager };