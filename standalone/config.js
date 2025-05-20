/*
 * Copyright 2021 James Lyne
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.config = {
 url : {
  configuration: 'https://ula2server.ddns.net/map/standalone/configuration.php',
  update: 'https://ula2server.ddns.net/map/standalone/update.php?world={world}&ts={timestamp}',
  sendmessage: 'https://ula2server.ddns.net/map/standalone/sendmessage.php',
  login: 'https://ula2server.ddns.net/map/standalone/login.php',
  register: 'https://ula2server.ddns.net/map/standalone/register.php',
  tiles: 'https://ula2server.ddns.net/map/standalone/tiles.php?tile=',
  markers: 'https://ula2server.ddns.net/map/standalone/markers.php?marker='
 }
};
