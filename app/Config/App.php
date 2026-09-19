<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;

class App extends BaseConfig
{
    public string $baseURL = 'http://localhost/portfolio-rifki/public/';

    public function __construct()
    {
        parent::__construct();

        $configuredBaseURL = getenv('app.baseURL') ?: getenv('APP_BASE_URL');

        if ($configuredBaseURL) {
            $this->baseURL = rtrim($configuredBaseURL, '/') . '/';
            return;
        }

        if (isset($_SERVER['HTTP_HOST'])) {
            $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
            $scriptDir = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'])), '/');
            $this->baseURL = $protocol . '://' . $_SERVER['HTTP_HOST'] . ($scriptDir ? $scriptDir : '') . '/';
        }
    }

    /**
     * @var list<string>
     */
    public array $allowedHostnames = [];

    public string $indexPage = '';

    public string $uriProtocol = 'REQUEST_URI';

    public string $permittedURIChars = 'a-z 0-9~%.:_\-';

    public string $defaultLocale = 'en';

    public bool $negotiateLocale = false;

    /**
     * @var list<string>
     */
    public array $supportedLocales = ['en'];

    public string $appTimezone = 'UTC';

    public string $charset = 'UTF-8';

    public bool $forceGlobalSecureRequests = false;

    /**
     * @var array<string, string>
     */
    public array $proxyIPs = [];

    public bool $CSPEnabled = false;
}
