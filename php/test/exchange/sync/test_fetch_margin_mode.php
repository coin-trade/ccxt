<?php
namespace ccxt;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
include_once PATH_TO_CCXT . '/test/exchange/base/test_margin_mode.php';

function test_fetch_margin_mode($exchange, $skipped_properties, $symbol) {
    $method = 'fetchMarginMode';
    $margin_mode = $exchange->fetch_margin_mode($symbol);
    test_margin_mode($exchange, $skipped_properties, $method, $margin_mode);
    return true;
}
