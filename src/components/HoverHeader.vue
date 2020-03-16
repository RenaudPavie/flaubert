<template>
  <div id="mainHeader">
    <div id="topHeader">
      <b-navbar>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="d-none d-lg-block navSearch mr-sm-2"
              placeholder="Recherche..."
            ></b-form-input>
          </b-nav-form>
          <b-nav-item class="erasmus" href="/erasmus">
            <img src="@/assets/images/elements/ico-erasmus.svg" alt="logo Erasmus+" />
          </b-nav-item>
          <b-nav-item class="brochures" href="/brochures">
            <div class="bgIcoBrochure">
              <img src="@/assets/images/elements/ico-brochures.png" alt="logo connexion/aller à" />
            </div>
            <span>Brochures</span>
          </b-nav-item>
          <b-nav-item class="contact" href="/contact">
            <div class="bgIcoContact">
              <img src="@/assets/images/elements/ico-contact.png" alt="logo connexion/aller à" />
            </div>
            <span>Contact</span>
          </b-nav-item>
          <b-nav-item class="connexion" @click="popupActive=true">
            <div class="bgIcoConnex">
              <img
                @click="popupActive=true"
                src="@/assets/images/elements/ico-connexion.png"
                alt="logo connexion/aller à"
              />
            </div>
            <span>Connexion</span>
          </b-nav-item>
          <vs-popup class="holamundo" title="Connexion" :active.sync="popupActive">
            <p>À quelle plateforme voulez-vous accédez ?</p>
            <div>
              <vs-button
                class="esidoc"
                target="_blank"
                type="filled"
                href="https://0760096s.esidoc.fr/"
              >Esidoc</vs-button>
              <vs-button
                class="proLP"
                target="_blank"
                type="filled"
                href="https://0760142s.index-education.net/pronote/"
              >PRONOTE LP</vs-button>
              <vs-button
                class="proLGT"
                target="_blank"
                type="filled"
                href="https://0760096s.index-education.net/pronote/"
              >PRONOTE LGT</vs-button>
            </div>
          </vs-popup>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div id="mainNavbar">
      <vsm-menu
        id="collaspeMainNavbar"
        :menu="menu"
        :base-width="380"
        :base-height="400"
        :screen-offset="10"
        element="header"
        @open-dropdown="onOpenDropdown"
        @close-dropdown="onCloseDropdown"
      >
        <template #default="data">
          <!--Dropdown Content-->
          <!-- <div>{{ data.item.firstOptionGroup }}</div> -->
          <div style="display:flex;">
            <div class="dropdownColumn">
              <div :key="firstLevel.id" v-for="firstLevel in data.item.firstOptionGroup">
                <h2>
                  {{ firstLevel.title }}
                  <br />
                  {{ firstLevel.secondLineTitle }}
                </h2>
                <ul>
                  <li :key="link.id" v-for="link in firstLevel.optionItem">
                    <a :href="link.href">{{link.title}}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="dropdownColumn">
              <div :key="firstLevel.id" v-for="firstLevel in data.item.secondOptionGroup">
                <h2>
                  {{ firstLevel.title }}
                  <br />
                  {{ firstLevel.secondLineTitle }}
                </h2>
                <ul>
                  <li :key="link.id" v-for="link in firstLevel.optionItem">
                    <a :href="link.href">{{link.title}}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="dropdownColumn">
              <div :key="firstLevel.id" v-for="firstLevel in data.item.thirdOptionGroup">
                <h2>
                  {{ firstLevel.title }}
                  <br />
                  {{ firstLevel.secondLineTitle }}
                </h2>
                <ul>
                  <li :key="link.id" v-for="link in firstLevel.optionItem">
                    <a :href="link.href">{{link.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>

        <template #before-nav>
          <!--Image or svg of website logo-->
          <li class="vsm-section" id="mainLogo">
            <img :src="svgPath" alt="Logo Lycée Flaubert" />
          </li>
        </template>

        <!-- <template #title="data">
          {{ data.item.title }}
        </template>-->

        <template #after-nav>
          <!--Mobile Burger, buttons, etc-->
          <!--For the same styles - add the vsm-section-->
          <!-- <li class="vsm-section vsm-mob-hide">
            <button>My Button</button>
          </li>-->
          <!--Display when user media screen below from $vsm-media (scss)-->
          <vsm-mob>
            <Sidebar class="d-flex align-items-center d-lg-none"></Sidebar>
          </vsm-mob>
        </template>
      </vsm-menu>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      popupActive: false,
      svgPath: require("@/assets/images/logo/logo-flaubert.png"),
      menu: [
        {
          // display menu item (or override title slot)
          title: "Lycée Général",
          // now this is not a link, but a menu item where there is a dropdown
          dropdown: "firstLink",
          // color of the item
          color: "#028985",
          // don't want a button element?
          element: "span",
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter
            class: ["customDropdown", { "my-class2": true }],
            // Custom attributes
            "data-big": "yes"
          },
          firstOptionGroup: [
            {
              title: "LYCEE",
              secondLineTitle: "GENERAL",
              url: require("@/assets/images/photo/01.jpg"),
              optionItem: [
                {
                  title: "Toutes les actualités",
                  href: "/actualites"
                },
                {
                  title: "Evénements"
                },
                {
                  title: "Situation / Contact"
                }
              ]
            }
          ],
          secondOptionGroup: [
            {
              title: "VOIES GÉNÉRALES",
              secondLineTitle: "ET TECHNOLOGIQUES",
              optionItem: [
                {
                  title: "ABIBAC",
                  link: "/Abibac"
                },
                {
                  title: "Euro Allemand"
                },
                {
                  title: "Euro Anglais"
                },
                {
                  title: "OIB"
                },
                {
                  title: "Enseignements Optionnels"
                },
                {
                  title: "Seconde"
                }
              ]
            },
            {
              title: "FILIÈRES",
              optionItem: [
                {
                  title: "Les Spécialités"
                },
                {
                  title: "Bac Général"
                },
                {
                  title: "Bac Technologique"
                }
              ]
            }
          ],
          thirdOptionGroup: [
            {
              title: "ACTIVITÉS CULTURELLES",
              secondLineTitle: "ET SPORTIVES",
              optionItem: [
                {
                  title: "Mast'Arts Class"
                },
                {
                  title: "Théâtre"
                },
                {
                  title: "Danse"
                },
                {
                  title: "UNSS"
                },
                {
                  title: "Escrime"
                },
                {
                  title: "SECTION HOCKEY"
                }
              ]
            }
          ],
          // add some events?
          listeners: {
            // all possible native events
            // mouseover: evt => {
            //   console.log("news hover", evt);
            // }
          },
          // just extra properties in the object
          new_section: false
        },
        // ...
      ]
    };
  },
  methods: {
    onOpenDropdown() {
      console.log("onOpenDropdown");
    },
    onCloseDropdown() {
      console.log("onCloseDropdown");
    }
  }
};
</script>
<style lang="scss">
.vsm-root {
  display: flex;
  align-items: flex-end;
  height: 100%;

    .vsm-dropdown-container {
        width: 100%;
        left:0;
    }
   
  // li.vsm-section span.vsm-link {

  // }
}
 .customDropdown .dropdownColumn {
        width: 33.33% !important;
    }
</style>