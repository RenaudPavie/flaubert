<template>
  <div id="mainHeader">
    <!-- TODO: FINIR LE TOP HEADER !!!!!!! -->

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
        <!-- </b-collapse> -->
      </b-navbar>
    </div>
    <div class="d-none d-lg-block" id="mainNavbar">
      <div>
        <b-navbar>
          <b-navbar-brand href="/" id="mainLogo">
            <img :src="svgPath" alt="Logo Lycée Flaubert" />
          </b-navbar-brand>

          <b-navbar-toggle target="collaspeMainNavbar"></b-navbar-toggle>

          <b-collapse id="collaspeMainNavbar" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav>
                <b-nav-item-dropdown :key="index" v-for="(item, index) in items" no-caret @mouseover.native="onOver" @mouseleave="onLeave">
                  <template v-slot:button-content>
                    <a class href.prevent >
                      {{ item.title }}
                      <br />
                      <span>{{item.titleUpper}}</span>
                    </a>
                    <div class="afterDropdown">
                      <svg
                        :fill="`${item.color}`"
                        data-name="Calque 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 185"
                      >
                        <circle cx="25" cy="25" r="25" />
                        <rect x="22" y="25" width="6" height="160" />
                      </svg>
                    </div>
                  </template>

                  <b-dropdown-group
                    ref="dropdown"
                    class="mainDropdown"
                    v-bind:style="`background-color: ${item.color};  border:1px solid ${item.color}; border-bottom-right-radius: 150px;`"
                  >
                    <b-dropdown-group
                      v-bind:style="`background: url('${group.url}') no-repeat`"
                      class="firstGroup"
                      :key="group.title"
                      v-for="group in item.firstOptionGroup"
                    >
                      <b-dropdown-header class="firstGroupHeader">
                        <svg
                          data-name="beforeFirstGroup"
                          :fill="`${item.color}`"
                          class="beforeFirstGroup"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 710"
                        >
                          <circle cx="10" cy="10" r="10" />
                          <rect
                            x="358"
                            y="567"
                            width="700"
                            height="4"
                            transform="translate(579 -348) rotate(90)"
                          />
                        </svg>
                        {{ group.title }}
                        <br />
                        {{ group.secondLineTitle }}
                      </b-dropdown-header>
                      <div class="linkInFirstGroup">
                        <b-dropdown-item
                          v-bind:style="`background-color: ${item.color}`"
                          :key="itemGroup.title"
                          v-for="itemGroup in group.optionItem"
                        >
                          <div class="bgIcoConnex">
                            <img
                              src="@/assets/images/elements/ico-connexion.png"
                              alt="logo connexion/aller à"
                            />
                          </div>
                          {{ itemGroup.title }}
                        </b-dropdown-item>
                      </div>
                    </b-dropdown-group>

                    <b-dropdown-group class="secondGroup">
                      <b-dropdown-group
                        class="mb-5"
                        :key="group.title"
                        v-for="group in item.secondOptionGroup"
                      >
                        <b-dropdown-header>
                          {{ group.title }}
                          <br />
                          {{ group.secondLineTitle }}
                        </b-dropdown-header>
                        <b-dropdown-item
                          :key="itemGroup.title"
                          v-for="itemGroup in group.optionItem"
                          :href="itemGroup.link"
                        >{{ itemGroup.title }}</b-dropdown-item>
                      </b-dropdown-group>
                    </b-dropdown-group>

                    <b-dropdown-group class="thirdGroup">
                      <b-dropdown-group :key="group.title" v-for="group in item.thirdOptionGroup">
                        <b-dropdown-header>
                          {{ group.title }}
                          <br />
                          {{ group.secondLineTitle }}
                        </b-dropdown-header>
                        <b-dropdown-item
                          :key="itemGroup.title"
                          v-for="itemGroup in group.optionItem"
                        >{{ itemGroup.title }}</b-dropdown-item>
                      </b-dropdown-group>
                    </b-dropdown-group>
                  </b-dropdown-group>
                </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>

    <Sidebar class="d-flex align-items-center d-lg-none"></Sidebar>
  </div>
</template>

<script>
import $ from "jquery";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Header",
  components: {
    Sidebar
  },
  data() {
    return {
      popupActive: false,
      maskState: false,
      items: [
        {
          title: "Lycée",
          titleUpper: "général",
          color: "#028985",
          class: "customDropdown",
          firstOptionGroup: [
            {
              title: "LYCEE",
              secondLineTitle: "GENERAL",
              url: require("@/assets/images/photo/01.jpg"),
              optionItem: [
                {
                  title: "Toutes les actualités"
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
          ]
        },
        {
          title: "Lycée",
          titleUpper: "professionnel",
          color: "#7a49b0",
          class: "customDropdown",
          firstOptionGroup: [
            {
              title: "LYCEE",
              secondLineTitle: "GENERAL",
              url: require("@/assets/images/photo/02.jpg"),
              optionItem: [
                {
                  title: "Toutes les actualités"
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
                  title: "ABIBAC"
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
          ]
        },
        {
          title: "Flaubert  ",
          titleUpper: "SUP",
          color: "#d17335"
          // optionsGroup: [
          //   {
          //     title: 'Option n1',
          //     optionItem: [
          //       {
          //         title: 'Item 1'
          //       }
          //     ]
          //   }
          // ]
        },
        {
          title: "ERASMUS+",
          color: "#333333"
          // optionsGroup: [
          //   {
          //     title: 'Option n1',
          //     optionItem: [
          //       {
          //         title: 'Item 1'
          //       }
          //     ]
          //   }
          // ]
        },
        {
          title: "AGENDA",
          color: "#000000"
          // optionsGroup: [
          //   {
          //     title: 'Option n1',
          //     optionItem: [
          //       {
          //         title: 'Item 1'
          //       }
          //     ]
          //   }
          // ]
        }
      ],
      svgPath: require("@/assets/images/logo/logo-flaubert.png"),
      activeItem: 0,
      search: "",
      type: "flat",
      types: [
        {
          value: "flat",
          text: "Flat"
        }
      ]
    };
  },
  methods: {
    onOver(evt) {
      console.log("hover");
      console.log(evt.target);
      this.$refs.visible = true;
    },
    onLeave() {
      console.log("mouseleave");
      this.$refs.dropdown.visible = false;
    }
  },
  mounted() {
    this.$root.$on("bv::dropdown::show", function() {
      $(".mask").toggleClass("show");
    });
    this.$root.$on("bv::dropdown::hide", function() {
      $(".mask").toggleClass("show");
    });
  }
};
</script>
